import { PageActionGenerator } from '../../types/page-action-generator';
import { ActionWorker } from '../../entities/action-workers/action-worker/action-worker';
import { InputBySelectorActionWorker } from '../../entities/action-workers/input-by-selector/input-by-selector-action-worker';
import { OpenPageActionWorker } from '../../entities/action-workers/open-page/open-page-action-worker';
import { PressButtonBySelectorActionWorker } from '../../entities/action-workers/press-button-by-selector/press-button-by-selector-action-worker';

export class ActionManager {
    private workers: ActionWorker[] = [];

    constructor(automationTool: PageActionGenerator) {
        const workerOptions = { automationTool };
        this.workers = [
            new InputBySelectorActionWorker(workerOptions),
            new OpenPageActionWorker(workerOptions),
            new PressButtonBySelectorActionWorker(workerOptions)
        ];
    }

    getConvertedStep(step: string): string | undefined {
        const correspondingWorker = this.workers.find(worker => worker.checkAffiliation(step));
        return correspondingWorker ? correspondingWorker.do(step) : undefined;
    }
}