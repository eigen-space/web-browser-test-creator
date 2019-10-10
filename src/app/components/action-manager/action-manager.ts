import { PageActions } from '../../types/page-actions';
import { ActionWorker } from '../../entities/action-workers/action-worker/action-worker';
import { InputBySelectorActionWorker } from '../../entities/action-workers/input-by-selector/input-by-selector-action-worker';
import { OpenPageActionWorker } from '../../entities/action-workers/open-page/open-page-action-worker';
import { PressButtonBySelectorActionWorker } from '../../entities/action-workers/press-button-by-selector/press-button-by-selector-action-worker';

interface ActionManagerOptions {
    adapter: PageActions;
}

export class ActionManager {
    private workers: ActionWorker[] = [];

    constructor(options: ActionManagerOptions) {
        const workerOptions = { adapter: options.adapter };
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