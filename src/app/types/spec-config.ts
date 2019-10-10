export interface SpecSuitConfig {
    title?: string;
    scenarios: ScenarioConfig[];
}

export interface ScenarioConfig {
    title: string;
    steps: string[];
}