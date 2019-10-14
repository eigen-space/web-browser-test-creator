import { Dictionary } from '@eigenspace/common-types';
import { ActionWorker } from '../action-worker/action-worker';

export class PressButtonBySelectorActionWorker extends ActionWorker {

    protected runAutomationToolMethod(args: { targetSelector: string }): string {
        return this.actionGenerator.pressOnButtonBySelector(args);
    };

    protected parseRawArgs(rawArgs: RegExpExecArray | null): Dictionary<string> {
        // TODO добавить более внятную валидацию
        if (!rawArgs) {
            throw new Error('Check "Press on button by selector" step');
        }

        const [, targetSelector] = rawArgs;

        return { targetSelector };
    };

    protected getStepPattern(): RegExp {
        return /^Press\son\sbutton\sby\sselector\s(.*)$/g;
    }
}
