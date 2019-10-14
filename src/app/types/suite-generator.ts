export interface SuiteGenerator {
    wrapToHeaderSpec(args: { title: string, scenarios: string }): string;
    wrapToItemSpec(args: { title: string, steps: string }): string;
}