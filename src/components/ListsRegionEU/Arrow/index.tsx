import React from 'react';
import Css from './index.module.css';

// image
import Arrow from '../../../images/arrow.png'

const Comp = () =>
{
    return (
        <div className="glide__arrows" data-glide-el="controls">
            <button className={`${Css["glide__arrow"]} ${Css["left"]}`} data-glide-dir="<">
                <img className={Css["Arrow"]} src={Arrow} />
            </button>
            <button className={`${Css["glide__arrow"]} ${Css["right"]}`} data-glide-dir=">">
                <img className={Css["Arrow"]} src={Arrow} />
            </button>
        </div>
    )
}

export default Comp
