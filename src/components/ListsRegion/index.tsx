import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Lists from './lists'
import Css from './index.module.css';

import { reducerPopulation, checkPopulation, mergeRegion } from './utils'
import * as Type from './type'

// image
import List from '../../images/container-lists.png'

type Props =
    {
        title: string;
    }


const Comp: React.FC<Props> = (
    {
        title
    }
) =>
{
    const [region, setRegion] = useState<Type.RegionMerge[]>([])
    const [populationAll, setPopulationAll] = useState<string>("0")

    async function getRegion()
    {

        const url = 'https://restcountries.eu/rest/v2/all'
        let region = await axios.get(url)

        if (!!region.data && Array.isArray(region.data))
        {
            let populationAll = reducerPopulation(region.data)        // sum population
            setPopulationAll(populationAll)

            let array = region.data.filter(value => checkPopulation(value.population))           // check population 30M - 75M
            array = array.map(value =>
            {
                return {
                    name: value.name,
                    countryCode: value.alpha2Code,
                    population: value.population,
                    flag: value.flag
                }
            })

            const url = 'https://api.covid19api.com/summary'
            let covidData = await axios.get(url)
            let merge = mergeRegion(array, covidData?.data?.Countries)

            setRegion(merge)
        }
    }

    useEffect(() =>
    {
        getRegion()
    }, [])

    return (
        <div className={Css["container"]}>
            <h1 className={Css["title"]}>
                {title}
            </h1>
            <img className={Css["image-list"]} src={List} />
            <div className={Css["container-content"]}>
                <div className={Css["subtitle"]}>
                    <div className={Css["line"]} />
                    <h2>
                        จำนวนประชากรทั่วโลกรวม {populationAll} คน
                </h2>
                    <div className={Css["line"]} />
                </div>
                <Lists
                    region={region}
                />
            </div>
        </div>
    )

}

export default Comp;
