import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    method: string;
    url: string;
}

export class RequestCheckActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['method', 'url'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.checkRequest(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, method, url] = rawArgs;
        return { method, url };
    };

    protected getStepName(): string {
        return 'Check';
    }

    protected getStepPattern(): RegExp {
        return /^Check\s(.*)-request\sto\s'(.*)'$/g;
    }
}
