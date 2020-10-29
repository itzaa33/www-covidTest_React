import * as TypeRegion from './type'

export function reducerPopulation(region: TypeRegion.RegionAll[])
{
    let populationAll = region.reduce((sum, { population }) => sum + population, 0)

    return new Intl.NumberFormat().format(populationAll)
}

export function checkPopulation(population: number): boolean
{
    if (!!population && population >= 30000000 && population <= 75000000)
    {
        return true
    }

    return false
}

export function mergeRegion(region: TypeRegion.RegionAll[], regionCovid: TypeRegion.RegionCovid[]): TypeRegion.RegionMerge[]
{

    if ((!!region && region.length > 0) && (!!regionCovid && regionCovid.length > 0))
    {
        return region.map(value =>
        {
            let obj = regionCovid.find(valueCovid => valueCovid.CountryCode === value.countryCode)

            return {
                ...value,
                population: new Intl.NumberFormat().format(value.population),
                infected: new Intl.NumberFormat().format(obj?.TotalConfirmed)
            } as TypeRegion.RegionMerge
        })
    }

    return []
}