import { IpDetector } from '../ip-detector/ip-detector';
import { ManualConfigReader } from '../manual-config-reader/manual-config-reader';

interface Data {
    [property: string]: () => string;
}

export class ActionVariableStore {
    private static DATA: Data = {
        MY_IP: () => ManualConfigReader.getIp() || IpDetector.getMyIp()
    };

    get(name: string): string {
        if (!ActionVariableStore.DATA[name]) {
            throw new Error('the requested variable is not available');
        }

        return ActionVariableStore.DATA[name]();
    }
}
