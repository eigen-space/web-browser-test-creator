const path = require('path');
import('ts-node/register');

exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './src/specs/generated/*.ts'
    ],
    maxInstances: 10,
    capabilities: [{ maxInstances: 5, browserName: 'chrome' }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        'chromedriver',
        [
            'image-comparison',
            {
                baselineFolder: path.join(process.cwd(), './src/specs/screenshotBaseline'),
                formatImageName: '{tag}-{logName}-{width}x{height}',
                screenshotPath: path.join(process.cwd(), './src/specs/.tmp/'),
                autoSaveBaseline: true
            }
        ]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: [
            'tsconfig-paths/register'
        ]
    },
    before: function() {
        require('ts-node').register({ files: true });
    }
};
