import React from 'react';
import Css from './App.module.css';
import ListRegion from './components/ListsRegion'
import ListRegionEU from './components/ListsRegionEU'

//  image 
import Banner from './images/banner.png'

const App = () =>
{
  return (
    <div className={Css['App']}>
      <img className={Css['banner']} src={Banner} />
      <ListRegion title={"รายละเอียดต่าง ๆ ของแต่ละประเทศ"} />
      <ListRegionEU/>
    </div>
  );
}

export default App;
