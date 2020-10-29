import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Css from './App.module.css';
import ListRegion from './components/ListsRegion'

//  image 
import Banner from './images/banner.png'

const App = () =>
{
  const [regionEU, setRegionEU] = useState<any>([])


  useEffect(() =>
  {
    const url = 'https://restcountries.eu/rest/v2/region/Europe'
    axios.get(url)
      .then(res =>
      {
        if (!!res.data && Array.isArray(res.data))
        {
          const array = res.data.filter(value => value.region === "Europe")
          setRegionEU(array)

        }
      })
      .catch(error =>
      {
        console.log(error)
      })
    // -------------------------------------------------

    // const url2 = "https://restcountries.eu/rest/v2/all"
    const url2 = "https://api.covid19api.com/all"
    axios.get(url2, {
      headers: {}
    })
      .then(res =>
      {
        console.log(res.data)
      })
      .catch(error =>
      {
        console.log(error)
      })
  }, [])

  return (
    <div className={Css['App']}>
      <img className={Css['banner']} src={Banner} />
      <ListRegion title={"รายละเอียดต่าง ๆ ของแต่ละประเทศ"} />
    </div>
  );
}

export default App;
