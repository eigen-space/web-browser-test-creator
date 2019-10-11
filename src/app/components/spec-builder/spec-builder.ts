import { ActionManager } from '../action-manager/action-manager';
import { AutomationToolActions } from '../../types/automation-tool-actions';
import { SpecSuitConfig } from '../../types/spec-config';
import * as os from 'os';

interface SpecBuilderOptions {
    manager: ActionManager;
    adapter: AutomationToolActions;
}

export class SpecBuilder {
    private manager: ActionManager;
    private adapter: AutomationToolActions;

    constructor(options: SpecBuilderOptions) {
        this.manager = options.manager;
        this.adapter = options.adapter;
    }

    get(config: SpecSuitConfig): string {
        const scenariosParts = config.scenarios.map(scenario => {
            let steps = scenario.steps.map(step => this.manager.getConvertedStep(step));
            // TODO Think about adding check page screen step
            steps.push(this.adapter.checkPageScreen({ title: config.title! }));
            if (steps.some(step => !Boolean(step))) {
                // eslint-disable-next-line no-console
                console.log(`Some step of ${scenario.title} scenario isn't recognized`);
                steps = [];
            }

            return this.adapter.wrapToItemSpec({ title: scenario.title, steps: steps.join(os.EOL) });
        });

        return this.adapter.wrapToHeaderSpec({ title: config.title!, scenarios: scenariosParts.join(os.EOL) });
    }
}