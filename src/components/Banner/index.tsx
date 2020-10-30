import React from 'react';
import Css from './index.module.css';

//  image 
import Banner from '../../images/banner.png'

const Comp = () =>
{

    return (
        <div className={Css["container"]}>
            <img className={Css['banner']} src={Banner} />
        </div>
    )
}

export default Comp