import { PageActionGenerator } from '../../types/page-action-generator';
import { ActionWorker } from '../../entities/action-workers/action-worker/action-worker';
import { InputBySelectorActionWorker } from '../../entities/action-workers/input-by-selector/input-by-selector-action-worker';
import { OpenPageActionWorker } from '../../entities/action-workers/open-page/open-page-action-worker';
import { PauseActionWorker } from '../../entities/action-workers/pause/pause-action-worker';
import { ScrollToElementActionWorker } from '../../entities/action-workers/scrollToElement/scroll-to-element-action-worker';
import { ScrollToElementBySelectorActionWorker } from '../../entities/action-workers/scrollToElementBySelector/scroll-to-element-by-selector-action-worker';
import { PressOnElementActionWorker } from '../../entities/action-workers/press-on-element/press-on-element-action-worker';
import { PressOnButtonBySelectorActionWorker } from '../../entities/action-workers/press-on-button-by-selector/press-on-button-by-selector-action-worker';

export class ActionManager {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private workers: ActionWorker<any>[] = [];

    constructor(actionGenerator: PageActionGenerator) {
        this.workers = [
            new InputBySelectorActionWorker(actionGenerator),
            new OpenPageActionWorker(actionGenerator),
            new PressOnButtonBySelectorActionWorker(actionGenerator),
            new PauseActionWorker(actionGenerator),
            new ScrollToElementActionWorker(actionGenerator),
            new ScrollToElementBySelectorActionWorker(actionGenerator),
            new PressOnElementActionWorker(actionGenerator)
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