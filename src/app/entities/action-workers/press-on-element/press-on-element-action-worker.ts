import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    data?: string;
}

export class PressOnElementActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['data'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.pressOnElement(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, , data] = rawArgs;
        return { data };
    };

    protected getStepPattern(): RegExp {
        return /^Press\son\s(button|element)\s'(.*)'$/g;
    }

    protected getStepName(): string {
        return 'Press on element';
    }
}
