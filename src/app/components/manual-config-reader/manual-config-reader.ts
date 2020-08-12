import { FsManager } from '../fs-manager/fs-manager';
import { StringUtils } from '../../utils/string.utils';

export class ManualConfigReader {
    private static FILE_PATH = `${__dirname}/../../../../../../.ui-specs-my-ip`;

    static getIp(): string | undefined {
        try {
            const fsManager = new FsManager();
            const fileData = fsManager.readWithoutComments(ManualConfigReader.FILE_PATH);
            return StringUtils.replaceAll(fileData, '\n', '');
        } catch (err) {
            return;
        }
    }
}
