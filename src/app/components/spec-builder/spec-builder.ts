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
        const scenariosParts = config.scenarios.map(scenario => {
            let steps = scenario.steps.map(step => this.manager.getConvertedStep(step));
            // TODO Think about adding check page screen step
            steps.push(this.actionGenerator.checkPageScreen({ title: config.title! }));
            if (steps.some(step => !Boolean(step))) {
                // eslint-disable-next-line no-console
                console.log(`Some step of ${scenario.title} scenario isn't recognized`);
                steps = [];
            }

            return this.actionGenerator.wrapToItemSpec({ title: scenario.title, steps: steps.join(os.EOL) });
        });

        return this.actionGenerator.wrapToHeaderSpec({ title: config.title!, scenarios: scenariosParts.join(os.EOL) });
    }
}