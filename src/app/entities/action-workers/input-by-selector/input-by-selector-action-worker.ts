import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    value?: string;
    targetSelector?: string;
}

export class InputBySelectorActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['targetSelector'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.inputValueBySelector(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, value, targetSelector] = rawArgs;
        return { value, targetSelector };
    };

    protected getStepPattern(): RegExp {
        return /^Enter\s(.*)\sin\sthe\sinput\sfield\sby\sselector\s(.*)$/g;
    };

    protected getStepName(): string {
        return 'Enter value in the input field by selector';
    }
}
