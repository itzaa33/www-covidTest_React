import React from 'react';
import Lists from './lists'
import Css from './index.module.css';

import * as Type from './type'

// image
import List from '../../images/container-lists.png'

type Props =
    {
        title: string;
        region:Type.RegionMerge[];
        populationAll:string;
    }


const Comp: React.FC<Props> = (
    {
        title,
        region,
        populationAll = 0
    }
) =>
{
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
