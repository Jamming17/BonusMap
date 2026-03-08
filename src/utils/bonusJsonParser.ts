export type BonusShop = {
    id:           string;
    name:         string;
    country:      "Iceland" | "Faroe Islands";
    city:         string;
    postcode:     string;
    latitude:     number;
    longitude:    number;
    imageName:    string;
    info:         string;
    openingTimes: string;
    dateOpened:   string;
    dateClosed:   string;
    nearby:       Array<BonusNearby>;
}

export type BonusNearby = {
    name:         string;
    description:  string;
    imageName:    string;
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
        typeof(input)              === "object" &&
        typeof(input.id)           === "string" &&
        typeof(input.name)         === "string" &&
        (input.country === "Iceland" || input.country === "Faroe Islands") &&
        typeof(input.city)         === "string" &&
        typeof(input.postcode)     === "string" &&
        typeof(input.latitude)     === "number" &&
        typeof(input.longitude)    === "number" &&
        typeof(input.imageName)    === "string" &&
        typeof(input.info)         === "string" &&
        typeof(input.openingTimes) === "string" &&
        typeof(input.dateOpened)   === "string" &&
        typeof(input.dateClosed)   === "string" &&
        input.nearby.every((nearbyI: any) => BonusNearbyTypeGuard(nearbyI))
    );
}

function BonusNearbyTypeGuard(input: any): input is BonusNearby {
    return (
        input &&
        typeof(input)             === "object" &&
        typeof(input.name)        === "string" &&
        typeof(input.description) === "string" &&
        typeof(input.imageName)   === "string"
    )
}