import { SpecBuilder } from '../spec-builder/spec-builder';
import { AutomationToolActions } from '../../types/automation-tool-actions';
import { ActionManager } from '../action-manager/action-manager';
import * as path from 'path';
import { FsManager } from '../fs-manager/fs-manager';

interface SpecCreationRunnerOptions {
    adapter: AutomationToolActions;
    outputDir: string;
}

// noinspection JSUnusedGlobalSymbols
export class SpecCreationRunner {
    private builder: SpecBuilder;
    private fsManager: FsManager;
    private readonly outputDir: string;

    // noinspection JSUnusedGlobalSymbols
    constructor(options: SpecCreationRunnerOptions) {
        const manager = new ActionManager({ adapter: options.adapter });
        this.builder = new SpecBuilder({ manager, adapter: options.adapter });
        this.fsManager = new FsManager();
        this.outputDir = options.outputDir;
    }

    // noinspection JSUnusedGlobalSymbols
    run(configPath: string): void {
        this.fsManager.walkThrough(configPath, this.visitFile.bind(this));
    }

    private visitFile(dir: string, file: string): void {
        const jsonPostfix = 'json';
        if (file.endsWith(jsonPostfix)) {
            this.generateSpec(dir, file);
        }
    }

    private generateSpec(dir: string, file: string): void {
        const pathToConfig = path.join(dir, file);
        const config = this.fsManager.readJsonFile(pathToConfig);

        const specTitle = this.normalizeTitle(config.title, file);
        const generatedSpec = this.builder.get({ ...config, title: specTitle });

        const outputFile = path.join(this.outputDir, this.normalizeFileName(specTitle));
        this.fsManager.writeFile(outputFile, generatedSpec);
        // eslint-disable-next-line
        console.log(`Spec for "${specTitle}" scenario  is generated!`);
    }

    // noinspection JSMethodCanBeStatic
    private normalizeTitle(title: string | undefined, fileName: string): string {
        if (title) {
            return title;
        }

        return fileName.replace(/[-_]/g, ' ')
            .split('.')
            .slice(0, -1)
            .join('.');
    }

    // noinspection JSMethodCanBeStatic
    private normalizeFileName(name: string): string {
        const normalizedName = name.replace(/\s/g, '-');
        return `${normalizedName}.spec.ts`;
    }
}