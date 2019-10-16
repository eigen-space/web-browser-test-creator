import { SpecBuilder } from '../spec-builder/spec-builder';
import { ActionGenerator } from '../../types/action-generator';
import { ActionManager } from '../action-manager/action-manager';
import * as path from 'path';
import { FsManager } from '../fs-manager/fs-manager';
import { SpecSuitConfig } from '../../types/spec-config';
import { Normalizer } from '../normalizer/normalizer';

// noinspection JSUnusedGlobalSymbols
export class SpecGenerator {
    private builder: SpecBuilder;
    private fsManager = new FsManager();
    private normalizer = new Normalizer();

    // noinspection JSUnusedGlobalSymbols
    constructor(actionGenerator: ActionGenerator, private readonly outputDir: string) {
        const manager = new ActionManager(actionGenerator);
        this.builder = new SpecBuilder(actionGenerator, manager);
    }

    // noinspection JSUnusedGlobalSymbols
    run(configDir: string): void {
        this.fsManager.walkThrough(configDir, this.visitFile.bind(this));
    }

    private visitFile(dir: string, file: string): void {
        const jsonExtName = '.json';
        if (path.extname(file) === jsonExtName) {
            this.generateSpec(dir, file);
        }
    }

    private generateSpec(dir: string, file: string): void {
        const pathToConfig = path.join(dir, file);
        const config = this.fsManager.readJsonFile(pathToConfig) as SpecSuitConfig;

        const specTitle = config.title || this.normalizer.normalizeTitle(file);
        const generatedSpec = this.builder.run({ ...config, title: specTitle });

        const outputFile = path.join(this.outputDir, this.normalizer.normalizeSpecFileName(specTitle));
        this.fsManager.writeFile(outputFile, generatedSpec);
        // eslint-disable-next-line
        console.log(`Spec for "${specTitle}" scenario  is generated!`);
    }
}