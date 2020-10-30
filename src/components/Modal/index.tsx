import React, { useState } from 'react';
import Css from './index.module.css'
import * as Type from '../ListsRegion/type'

import Image from '../../images/popup.png'

type Props = {
    regionMaxInfected: Type.RegionMerge[];
}

const Comp: React.FC<Props> = (
    {
        regionMaxInfected
    }
) =>
{
    const [opne, setOpen] = useState(true)

    if(!opne)
    {
        return null
    }

    return (
        <div className={Css["container"]}>
            <div className={Css["container-content"]}>
                <img src={Image} />
                <h2>
                    ประเทศที่จำนวนผู้ติดเชื้อมากสุด 2 อันดับ
                </h2>
                <div className={Css["container-lists"]}>
                    {
                        (!!regionMaxInfected && regionMaxInfected.length > 0) &&
                        regionMaxInfected.map((item, index) =>
                        {
                            return (
                                <div key={index} className={Css["list"]}>
                                    <img src={item.flag} />
                                    <div>
                                        <label>ผู้ติดเชื้อ: </label>
                                        <span>{item.infected}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={Css["btn-close"]}>
                        <button onClick={ () => setOpen( value => !value)}>
                            <span>ปิด</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp