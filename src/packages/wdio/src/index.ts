import { SpecCreationRunner } from '../../../app/components/spec-creation-runner/spec-creation-runner';
import { ActionAdapter } from './components/action-adapter/action-adapter';
import * as path from 'path';

// TODO создавать директории если нет
const runnerOptions = {
    outputDir: path.join(__dirname, './specs'),
    adapter: new ActionAdapter()
};
const runner = new SpecCreationRunner(runnerOptions);

const configsPath = path.join(__dirname, './specs/configs');
runner.run(configsPath);