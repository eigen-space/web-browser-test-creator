import { ActionManager } from '../action-manager/action-manager';
import { ActionGenerator } from '../../types/action-generator';
import { SpecSuitConfig } from '../../types/spec-config';
import * as os from 'os';

export class SpecBuilder {

    constructor(
        private actionGenerator: ActionGenerator,
        private manager: ActionManager) {
    }

    get(config: SpecSuitConfig): string {
        const scenarioSpecItems = config.scenarios.map(scenario => {
            const steps = scenario.steps.map(step => this.manager.getConvertedStep(step));
            steps.push(this.actionGenerator.checkPageScreen({ title: config.title! }));
            return this.actionGenerator.wrapToItemSpec({ title: scenario.title, steps: steps.join(os.EOL) });
        });

        const options = {
            title: config.title!,
            scenarios: scenarioSpecItems.join(os.EOL)
        };

        return this.actionGenerator.wrapToHeaderSpec(options);
    }
}