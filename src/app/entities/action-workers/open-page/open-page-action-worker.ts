import { Dictionary } from '@eigenspace/common-types';
import { ActionWorker } from '../action-worker/action-worker';

export class OpenPageActionWorker extends ActionWorker {

    protected runAutomationToolMethod(args: { url: string }): string {
        return this.actionGenerator.openPage(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray | null): Dictionary<string> {
        // TODO добавить более внятную валидацию
        if (!rawArgs) {
            throw new Error('Check "Open page" step');
        }

        const [, url] = rawArgs;

        return { url };
    };

    protected getStepPattern(): RegExp {
        return /^Open\spage\son\s(.*)$/g;
    }
}
