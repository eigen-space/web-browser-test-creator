import { ActionManager } from '../action-manager/action-manager';
import { ActionGenerator } from '../../..';
import { SpecSuitConfig } from '../../..';
import * as os from 'os';

export class SpecBuilder {

    constructor(
        private actionGenerator: ActionGenerator,
        private manager: ActionManager) {
    }

    run(config: Required<SpecSuitConfig>): string {
        const scenarioSpecItems = config.scenarios.map(scenario => {
            const steps = scenario.steps.map(this.manager.getConvertedStep);
            return this.actionGenerator.wrapToItemSpec({ title: scenario.title, steps: steps.join(os.EOL) });
        });

        const options = {
            title: config.title,
            scenarios: scenarioSpecItems.join(os.EOL)
        };

        return this.actionGenerator.wrapToHeaderSpec(options);
    }
}
