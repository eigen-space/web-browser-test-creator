import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    duration?: string;
}

export class PauseActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['duration'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.pause(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, duration] = rawArgs;
        return { duration };
    };

    protected getStepPattern(): RegExp {
        return /^Pause\sfor\s(.*)\sms$/g;
    }

    protected getStepName(): string {
        return 'Pause';
    }
}
