import React from 'react';
import Css from './index.module.css';

import * as Type from '../type'

type Props =
    {
        region: Type.Region[];
    }

const Comp: React.FC<Props> = (
    {
        region
    }
) =>
{

    return (
        <div className={`${Css["glide__track"]} glide__track`} data-glide-el="track">
            <ul className="glide__slides" >
                {
                    (!!region && region.length > 0) &&
                    region.map((item, index) =>
                    {
                        return (
                            <li key={index} className={`${Css["glide__slide"]} glide__slide`}>
                                <div className={Css["content"]}>
                                    <img src={item.flag} />
                                    <div className={Css["container-description"]}>
                                        <div className={Css["title"]}>
                                            {`${item.name} (${item.alpha2Code})`}
                                        </div>
                                        <div className={Css["description"]}>
                                            <div>
                                                <label>เมืองหลวง: </label>
                                                {item.capital}
                                            </div>
                                            <div>
                                                <label>ประชากร: </label>
                                                {item.population} คน
                                            </div>
                                            <div>
                                                <label>สกุลเงิน: </label>
                                                {item.currencies.toString()}
                                            </div>
                                            <div>
                                                <label>ภูมิภาค: </label>
                                                {item.region}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Comp;
