import { Dictionary } from '@eigenspace/common-types';
import { ActionWorker } from '../action-worker/action-worker';

export class InputBySelectorActionWorker extends ActionWorker {

    protected runAdapterMethod(args: { value: string, targetSelector: string }): string {
        return this.adapter.inputValueBySelector(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray | null): Dictionary<string> {
        // TODO добавить более внятную валидацию
        if (!rawArgs) {
            throw new Error('Check "Enter value in the input field by selector" step');
        }

        const [, value, targetSelector] = rawArgs;

        return { value, targetSelector };
    };

    protected getStepPattern(): RegExp {
        return /^Enter\s(.*)\sin\sthe\sinput\sfield\sby\sselector\s(.*)$/g;
    };
}
