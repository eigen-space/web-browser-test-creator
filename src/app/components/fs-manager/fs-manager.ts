import { walkThrough } from '@eigenspace/helper-scripts';
import * as fs from 'fs';
import * as path from 'path';
import { AnyDictionary } from '@eigenspace/common-types';

export class FsManager {

    // noinspection JSMethodCanBeStatic
    walkThrough(dir: string, callback: Function): void {
        walkThrough(dir, callback);
    }

    // noinspection JSMethodCanBeStatic
    readJsonFile<T extends AnyDictionary>(filename: string): T {
        return JSON.parse(fs.readFileSync(filename, 'utf8'));
    }

    // noinspection JSMethodCanBeStatic
    writeFile(pathFile: string, data: string): void {
        const onlyDirPath = path.dirname(pathFile);
        this.createPath(onlyDirPath);
        fs.writeFileSync(pathFile, data);
    }

    // noinspection JSMethodCanBeStatic
    private createPath(dirPath: string): void {
        // This "recursive" option is added only in node@10.12.0
        // https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V10.md#2018-10-10-version-10120-current-targos
        fs.mkdirSync(dirPath, { recursive: true });
    }
}