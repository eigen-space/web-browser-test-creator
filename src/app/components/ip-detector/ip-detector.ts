import * as os from 'os';

export class IpDetector {
    private static TARGET_FAMILY = 'ipv4';

    static getMyIp(): string {
        const interfaces = os.networkInterfaces();

        const ips = Object.keys(interfaces)
            .map(nic => {
                const addresses = interfaces[nic].filter(details => {
                    if (details.family.toLowerCase() !== IpDetector.TARGET_FAMILY
                        || IpDetector.isLoopback(details.address)) {
                        return false;
                    }

                    return IpDetector.isPrivate(details.address);
                });

                return addresses.length ? addresses[0].address : undefined;
            })
            .filter(Boolean);

        if (!ips[0]) {
            throw new Error('I couldn\'t define your ip address');
        }

        return ips[0] as string;
    }

    private static isPrivate(addr: string): boolean {
        return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
            || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
            || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
            || /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
            || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
            || /^f[cd][0-9a-f]{2}:/i.test(addr)
            || /^fe80:/i.test(addr)
            || /^::1$/.test(addr)
            || /^::$/.test(addr);
    };

    private static isLoopback(addr: string): boolean {
        return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/.test(addr)
            || /^fe80::1$/.test(addr)
            || /^::1$/.test(addr)
            || /^::$/.test(addr);
    };
}
