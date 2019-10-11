import { SpecSuitConfig } from '../../types/spec-config';
import { walkThrough } from '@eigenspace/helper-scripts';
import * as fs from 'fs';
import * as path from 'path';

export class FsManager {

    // noinspection JSMethodCanBeStatic
    walkThrough(dir: string, callback: Function): void {
        walkThrough(dir, callback);
    }

    // noinspection JSMethodCanBeStatic
    readJsonFile(filename: string): SpecSuitConfig {
        return JSON.parse(fs.readFileSync(filename, 'utf8'));
    }

    // noinspection JSMethodCanBeStatic
    writeFile(pathFile: string, data: string): void {
        const onlyDirPath = path.dirname(pathFile);
        this.createPath(onlyDirPath);
        fs.writeFileSync(pathFile, data);
    }

    // noinspection JSMethodCanBeStatic
    createPath(dirPath: string): void {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}