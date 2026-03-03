export type BonusShop = {
    id:        string;
    name:      string;
    country:   "Iceland" | "Faroe Islands";
    city:      string;
    postcode:  string;
    latitude:  number;
    longitude: number;
}

export function parseJSON(jsonInput: string): Array<BonusShop> {
    const parsedJson: unknown = JSON.parse(jsonInput);

    if (Array.isArray(parsedJson) === false) return [];

    if (parsedJson.every(BonusTypeGuard)) return parsedJson;

    return [];

}

function BonusTypeGuard(input: any): input is BonusShop {
    return (
        input &&
        typeof(input)          === "object" &&
        typeof(input.id)       === "string" &&
        typeof(input.name)     === "string" &&
        (input.country === "Iceland" || input.country === "Faroe Islands") &&
        typeof(input.city)     === "string" &&
        typeof(input.postcode) === "string" &&
        typeof(input.latitude) === "number" &&
        typeof(input.longitude) === "number"
    );
}