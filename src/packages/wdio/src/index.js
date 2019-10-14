const { SpecGenerator } = require('../../../../dist/app/components/spec-generator/spec-generator');
const { WebDriverIoActionGenerator } = require('../../../../dist/packages/wdio/src/components/action-generator/web-driver-io-action-generator');
const path = require('path');

// TODO создавать директории если нет
const outputDir = path.join(__dirname, './specs/generated');
const runner = new SpecGenerator(new WebDriverIoActionGenerator(), outputDir);

// TODO Add to build configs folder
const configsPath = path.join(__dirname, './specs/configs');
runner.run(configsPath);