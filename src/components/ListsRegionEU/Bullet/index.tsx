import React from 'react';
import Css from './index.module.css';

import * as Type from '../type'

type Props = {
    region: Type.Region[];
}

const Comp: React.FC<Props> = (
    {
        region
    }
) =>
{
    return (
        <div className={`${Css["glide__bullets"]} glide__bullets`} data-glide-el="controls[nav]">
            {
                (!!region && region.length > 0) &&
                region.map((item, index) =>
                {
                    return (
                        <button
                            key={index}
                            className={`${Css["glide__bullet"]} glide__bullet`}
                            data-glide-dir={`=${index}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default Comp
