import { PageActionGenerator } from '../../types/page-action-generator';
import { ActionWorker } from '../../entities/action-workers/action-worker/action-worker';
import { InputBySelectorActionWorker } from '../../entities/action-workers/input-by-selector/input-by-selector-action-worker';
import { OpenPageActionWorker } from '../../entities/action-workers/open-page/open-page-action-worker';
import { PressButtonBySelectorActionWorker } from '../../entities/action-workers/press-button-by-selector/press-button-by-selector-action-worker';

export class ActionManager {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private workers: ActionWorker<any>[] = [];

    constructor(actionGenerator: PageActionGenerator) {
        this.workers = [
            new InputBySelectorActionWorker(actionGenerator),
            new OpenPageActionWorker(actionGenerator),
            new PressButtonBySelectorActionWorker(actionGenerator)
        ];
    }

    getConvertedStep(step: string): string {
        const correspondingWorker = this.workers.find(worker => worker.checkAffiliation(step));

        if (!correspondingWorker) {
            // eslint-disable-next-line no-console
            throw new Error(`'${step}' step isn't recognized`);
        }

        return correspondingWorker.do(step);
    }
}