export class StringUtils {

    static replaceAll(value: string, searchingValue: string, replacement: string): string {
        return value.replace(new RegExp(searchingValue, 'g'), replacement);
    }
}
