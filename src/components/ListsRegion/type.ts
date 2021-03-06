
export type RegionMerge = {
    name: string;
    population: string;
    countryCode: string;
    flag: string;
    infected: string;
}

export type RegionAll = {
    name: string;
    population: number;
    alpha2Code: string;
    flag: string;
}

export type RegionCovid = {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
    Premium: object;
}
