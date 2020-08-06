import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    value?: string;
    targetSelector?: string;
}

export class InputBySelectorActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['value', 'targetSelector'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.inputValueBySelector(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, value, targetSelector] = rawArgs;
        return { value: value.trim(), targetSelector: targetSelector.trim() };
    };

    protected getStepPattern(): RegExp {
        return /^Enter\s'(.*)'\sin\sthe\sinput\sfield\s'(.*)'$/g;
    };

    protected getStepName(): string {
        return 'Enter value in the input field by selector';
    }
}
