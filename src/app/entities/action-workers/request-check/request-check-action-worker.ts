import { ActionWorker } from '../action-worker/action-worker';

interface ParsedParams {
    method: string;
    url: string;
    bodyPath: string;
}

export class RequestCheckActionWorker extends ActionWorker<ParsedParams> {
    protected requiredFieldNames: (keyof ParsedParams)[] = ['method', 'url', 'bodyPath'];

    protected runAutomationToolMethod(args: Required<ParsedParams>): string {
        return this.actionGenerator.checkRequest(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray): ParsedParams {
        const [, method, url, bodyPath] = rawArgs;
        return { method, url, bodyPath };
    };

    protected getStepName(): string {
        return 'Check';
    }

    protected getStepPattern(): RegExp {
        return /^Check\swhether\s(.*)-request\sto\s'(.*)'\sis\s'(.*)'$/g;
    }
}
