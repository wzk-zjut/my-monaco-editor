import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { validate } from './validate';
import { debounce } from 'lodash';

// 捕获错误类
export class Linter {
  private disposables: monaco.IDisposable[] = [];
  private listener: { [uri: string]: monaco.IDisposable } = Object.create(null);
  private languageId: string;
  constructor(id: string) {
    this.languageId = id;
    const onModelAdd = (model: monaco.editor.IModel) => {
      const modelId =
        // @ts-ignore ts error
        model.getModeId?.() ||
        // @ts-ignore new Api
        model.getLanguageId?.();
      if (modelId !== this.languageId) {
        return;
      }

      const debouncedDoValidate = debounce(this.doValidate, 500);
      this.listener[model.uri.toString()] = model.onDidChangeContent(() => {
        debouncedDoValidate(model);
      });
      this.doValidate(model);
    };

    const onModelRemoved = (model: monaco.editor.IModel): void => {
      monaco.editor.setModelMarkers(model, 'ruleLint', []);

      const uriStr = model.uri.toString();
      const listener = this.listener[uriStr];
      if (listener) {
        listener.dispose();
        delete this.listener[uriStr];
      }
    };

    this.disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
    this.disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved));
    this.disposables.push(
      monaco.editor.onDidChangeModelLanguage(event => {
        onModelRemoved(event.model);
        onModelAdd(event.model);
      })
    );
    this.disposables.push({
      dispose: () => {
        for (const key in this.listener) {
          this.listener[key].dispose();
        }
      },
    });
    monaco.editor.getModels().forEach(onModelAdd);
  }

  dispose() {
    this.disposables.forEach(item => item?.dispose());
    this.disposables = [];
  }

  private async doValidate(model: monaco.editor.IModel) {
    const errors = await validate(model);
    if (errors) {
      monaco.editor.setModelMarkers(model, 'ruleLint', errors);
    }
  }
}
