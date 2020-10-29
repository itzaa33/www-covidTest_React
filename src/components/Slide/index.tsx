import React, { useEffect, useRef } from 'react';
import Css from './index.module.css';

const options = {

}

const Comp = () =>
{
    const id = 'slide'
    const ref = useRef(null);

    function handleMount()
    {
        let glide: any;

        async function init()
        {
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

    useEffect(handleMount, []);

    return (
        <div className={Css["container"]}>
            <div id={id} className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">0</li>
                        <li className="glide__slide">1</li>
                        <li className="glide__slide">2</li>
                    </ul>
                </div>

                {/* ----------------arrow----------------- */}
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
                {/* ----------------bullet----------------*/}
                <div className="glide__bullets" data-glide-el="controls[nav]">
                    <button className="glide__bullet" data-glide-dir="=0"></button>
                    <button className="glide__bullet" data-glide-dir="=1"></button>
                    <button className="glide__bullet" data-glide-dir="=2"></button>
                </div>
            </div>
        </div>
    );
}

export default Comp;
