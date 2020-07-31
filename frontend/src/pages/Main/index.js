import React from 'react';

import './styles.css'

import DeathStar from '../../assets/Death-Star.ico';
import MillenniumFalcon from '../../assets/Millennium-Falcon.ico';
import R2D2 from '../../assets/R2D2.ico';

export default function Main() {
    return (
        <div class="mt-5 col-sm-3 col-sm offset-4">
            <a href="/planets" class="btn btn-warning btn-lg btn-block">
                <img src={DeathStar} alt="planetas" class="main-icons" />
                Planets
            </a>
            <a href="/people" class="btn btn-warning btn-lg btn-block">
                <img src={R2D2} alt="personagens" class="main-icons" />
                People
            </a>
            <a href="/starships" class="btn btn-warning btn-lg btn-block">
                <img src={MillenniumFalcon} alt="naver" class="main-icons" />
                Starships
            </a>
        </div>
    );
}