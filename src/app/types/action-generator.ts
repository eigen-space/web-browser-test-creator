import { SuiteGenerator } from './suite-generator';
import { PageActionGenerator } from './page-action-generator';

export interface ActionGenerator extends PageActionGenerator, SuiteGenerator {
}