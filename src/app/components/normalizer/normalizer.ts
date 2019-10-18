export class Normalizer {
    static BASE_SPEC_NAME = 'e2e.spec.ts';

    // noinspection JSMethodCanBeStatic
    normalizeTitle(name: string): string {
        const title = name.replace(/[-_]/g, ' ')
            .split('.')
            .slice(0, -1)
            .join('.');

        return title.charAt(0).toUpperCase() + title.slice(1);
    }

    // noinspection JSMethodCanBeStatic
    normalizeSpecFileName(name: string): string {
        const normalizedName = name
            .toLowerCase()
            .replace(/\s/g, '-');
        return `${normalizedName}.${Normalizer.BASE_SPEC_NAME}`;
    }
}