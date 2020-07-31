import React, { useState } from 'react';

import api from '../../services/api'


export default function Stops() {

    const [distance, setDistance] = useState("")
    const [starships, setStarships] = useState([])

    function myChangeHandler(event) {
        setDistance(event.target.value)
    }

    function search(e) {
        e.preventDefault();
        if (distance && distance > 0)
            api.post('/api/starship/stops', { distance: distance }).then(response => {
                setStarships(response.data.results)
            })
    }

    return (
        <div>
            <a href="/starships" class="btn-back">Back</a>
            <div class="row row-list-stops">
                <div class="col-md-7">
                    <h1>Starships stops</h1>
                    <form class="form-stops">
                        <input type="text" class="input" placeholder="enter a distance in MGLT" onChange={myChangeHandler} />
                        <button class="btn btn-dark ml-1" onClick={search}>Search</button>
                    </form>
                </div>
                <div class="col-md-5 mt-5">
                    <div class="table-stops-result">
                        <table class="table table-striped table-sm table-dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Stops</th>
                                </tr>
                            </thead>
                            <tbody>
                                {starships.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{index}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}