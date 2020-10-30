import React from 'react';
import Css from './index.module.css';

import * as Type from '../type'

type Props =
    {
        region: Type.RegionMerge[];
    }

const Comp: React.FC<Props> = (
    {
        region
    }
) =>
{

    return (
        <div className={Css["container-lists"]}>
            {
                (region.length > 0) &&
                region.map((item, index) =>
                {
                    return (
                        <div key={index} className={Css["list"]}>
                            <img src={item.flag} />
                            <div className={Css["description"]}>
                                <div className={Css["region-name"]}>
                                    {`${item.name} (${item.countryCode})`}
                                </div>
                                <div className={Css["region-infected"]}>
                                    ผู้ติดเชื้อ: {item.infected} คน
                                </div>
                                <div className={Css["region-population"]}>
                                    ประชากร: {item.population} คน
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Comp;
