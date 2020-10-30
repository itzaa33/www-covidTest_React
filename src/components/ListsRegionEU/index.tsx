import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import Lists from './lists'
import Arrow from './Arrow'
import Bullet from './Bullet'
import * as Type from './type'
import Css from './index.module.css';

// image
import List from '../../images/container-lists2.png'


type Currencies = {
    code: string;
    name: string;
    symbol: string;
}

const Comp = () =>
{
    const id = 'slide'
    const ref = useRef(null);
    const [regionEU, setRegionEU] = useState<Type.Region[]>([])

    function setCurrencies(currencies: Currencies[])
    {
        if (!!currencies && currencies.length > 0)
        {
            return currencies.map(item =>
            {
                return item.name
            })
        }

        return []
    }

    async function getRegion()
    {
        const url = 'https://restcountries.eu/rest/v2/region/Europe'
        let region = await axios.get(url)

        if (!!region.data && Array.isArray(region.data))
        {
            const array = region.data.filter(value => value.region === "Europe")

            let setRegion = array.map(item =>
            {
                return {
                    name: item.name,
                    alpha2Code: item.alpha2Code,
                    capital: item.capital,
                    flag: item.flag,
                    currencies: setCurrencies(item?.currencies),
                    population: new Intl.NumberFormat().format(item.population),
                    region: item.region
                }
            })
            setRegionEU(setRegion)
        }
    }

    function handleMount()
    {
        let glide: any;

        async function init()
        {
            const options = {
                autoplay: 0,
                type: 'carousel',
                startAt: 0,
                perView: 1,

                gap: 0,
                peek: 0,
            }

            const Glide = (await import('@glidejs/glide')).default;

            const el = document.getElementById(id);
            glide = new Glide(el, options);

            if (!!glide)
            {
                glide.mount();
                ref.current = glide;
            }
        }

        init().then();

        return function ()
        {
            if (glide?.destroy)
            {
                glide.destroy();
            }
        }
    }

    useEffect(() =>
    {
        handleMount()
        getRegion()
    }, []);

    return (
        <div className={Css["container"]}>
            <img className={Css["image-list"]} src={List} />
            <h2 className={Css["title"]}>
                ประเทศที่อยู่ใน EU
            </h2>
            <div className={Css["container-content"]}>
                <div id={id} className={`${Css["glide"]} glide`}>
                    <Lists region={regionEU} />
                    <Arrow />
                    <Bullet region={regionEU}/>
                </div>
            </div>
        </div>
    );
}

export default Comp;
