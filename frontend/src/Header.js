import React from 'react';

import logoImg from './assets/logo3.png';

export default function Main() {
    return (
        <div class="pt-3 pb-5">
            <header class="col-sm-3 col-sm offset-4">
                <a href="/">
                    <img src={logoImg} alt="logo" width="250" />
                </a>
            </header>
        </div>
    );
}