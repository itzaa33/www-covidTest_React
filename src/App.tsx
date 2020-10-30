import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Css from './App.module.css';
import Banner from './components/Banner'
import ListRegion from './components/ListsRegion'
import ListRegionEU from './components/ListsRegionEU'
import Modal from './components/Modal'

import * as Type from './components/ListsRegion/type'
import { reducerPopulation, checkPopulation, mergeRegion, reduceMaxInfected } from './utils'

const App = () =>
{
  const [region, setRegion] = useState<Type.RegionMerge[]>([])
  const [regionMaxInfected, setRegionMaxInfected] = useState<Type.RegionMerge[]>([])
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
          alpha2Code: value.alpha2Code,
          population: value.population,
          flag: value.flag
        }
      })

      const url = 'https://api.covid19api.com/summary'
      let covidData = await axios.get(url)
      let merge = mergeRegion(array, covidData?.data?.Countries)
      let searchInfectedMax = reduceMaxInfected(region?.data, covidData?.data?.Countries)
      setRegionMaxInfected(searchInfectedMax)
      setRegion(merge)
    }
  }

  useEffect(() =>
  {
    getRegion()
  }, [])

  return (
    <div className={Css['App']}>
      <Banner />
      <ListRegion
        title={"รายละเอียดต่าง ๆ ของแต่ละประเทศ"}
        region={region}
        populationAll={populationAll}
      />
      <ListRegionEU />
      <Modal regionMaxInfected={regionMaxInfected}/>
    </div>
  );
}

export default App;
