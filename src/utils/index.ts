import * as TypeRegion from '../components/ListsRegion/type'

export function reducerPopulation(region: TypeRegion.RegionAll[])
{
    let populationAll = region.reduce((sum, { population }) => sum + population, 0)

    return new Intl.NumberFormat().format(populationAll)
}

export function reduceMaxInfected(region: TypeRegion.RegionAll[], regionCovid: TypeRegion.RegionCovid[])
{

    if (!regionCovid || regionCovid.length === 0)
    {
        return []
    }

    const first = regionCovid.reduce(function (prev, current) // max value
    {
        return (prev.TotalConfirmed > current.TotalConfirmed) ? prev : current
    })

    const second = regionCovid.reduce(function (prev, current) // second max value
    {

        if (current.TotalConfirmed !== first.TotalConfirmed)
        {
            return (prev.TotalConfirmed > current.TotalConfirmed) ? prev : current
        }
        else
        {
            return prev
        }
    })

    const Array = [first, second]

    return Array.map(value =>
    {
        let obj = region.find(valueCovid => valueCovid.alpha2Code === value.CountryCode)

        return {
            ...obj,
            countryCode: value?.CountryCode,
            population: new Intl.NumberFormat().format(obj.population),
            infected: new Intl.NumberFormat().format(value?.TotalConfirmed)
        } as TypeRegion.RegionMerge
    })
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
            let obj = regionCovid.find(valueCovid => valueCovid.CountryCode === value.alpha2Code)

            return {
                ...value,
                countryCode: obj?.CountryCode,
                population: new Intl.NumberFormat().format(value.population),
                infected: new Intl.NumberFormat().format(obj?.TotalConfirmed)
            } as TypeRegion.RegionMerge
        })
    }

    return []
}