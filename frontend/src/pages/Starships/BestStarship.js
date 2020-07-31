import React, { useState } from 'react';

import api from '../../services/api'


export default function BestStarship() {

    const [distance, setDistance] = useState("")
    const [passengers, setPassengers] = useState("")
    const [viewInfo, setViewInfo] = useState("")
    const [starship, setStarship] = useState({})


    function myChangeHandler(event) {
        setDistance(event.target.value)
    }

    function myChangeHandlerPassengers(event) {
        setPassengers(event.target.value)
    }

    function search(e) {
        e.preventDefault();
        if (passengers && passengers > 0 && distance && distance > 0) {
            api.post('/api/starship/beststarship', { distance: distance, passengers: passengers }).then(response => {
                setStarship(response.data)
                setViewInfo(<div class="card-info-starship">
                    <h4>Best starship for transport {passengers} passengers for {distance} MGLT away</h4>
                    <span><strong>{response.data.name}</strong> it's a good option...</span>
                </div>
                )
            })
        }
    }

    return (
        <div>
            <a href="/starships" class="btn-back">Back</a>
            <div class="row row-list-stops">
                <div class="col-md-7">
                    <h1>Best starship</h1>
                    <form>
                        <input type="text" class="input" placeholder="enter a distance in MGLT" onChange={myChangeHandler} />
                        <input type="text" class="input" placeholder="enter a number of passengers" onChange={myChangeHandlerPassengers} />
                        <button class="btn btn-dark mt-1" onClick={search}>Search</button>
                    </form>
                </div>
                <div class="col-md-5 mt-5">
                    <div class="card-best-result">
                        {viewInfo}
                    </div>
                </div>
            </div>
        </div>
    );
}