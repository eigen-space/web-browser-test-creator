const { SpecCreationRunner } = require('../../../../dist/app/components/spec-creation-runner/spec-creation-runner');
const { ActionAdapter } = require('../../../../dist/packages/wdio/src/components/action-adapter/action-adapter');
const path = require('path');

// TODO создавать директории если нет
const runnerOptions = {
    outputDir: path.join(__dirname, './specs/generated'),
    adapter: new ActionAdapter()
};
const runner = new SpecCreationRunner(runnerOptions);

// TODO Add to build configs folder
const configsPath = path.join(__dirname, './specs/configs');
runner.run(configsPath);