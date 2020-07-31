import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'
import Space from '../../assets/starships.jpg';

export default function Starships() {
    function formatNumberInt(num) {
        let numInt = parseInt(num)
        if (numInt && numInt !== NaN)
            return new Intl.NumberFormat().format(numInt)
        else
            return num
    }

    const [starships, setStarships] = useState([])
    const [viewInfo, setViewInfo] = useState("")
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()

    function request(page) {
        if (page && page !== "")
            api.get('/api/starship/page/' + page).then(response => {
                setStarships(response.data.results)
                let nextSplit = (typeof response.data.next === 'string') ? response.data.next.split("=") : ""
                let previousSplit = (typeof response.data.previous === 'string') ? response.data.previous.split("=") : ""
                setNext(parseInt(nextSplit[1]))
                setPrevious(parseInt(previousSplit[1]))
            })
    }

    function getDetails( currentUrl) {
        let aux = currentUrl.split("/")
        let id = aux[aux.length - 2]

        api.get('/api/starship/' + id).then(response => {
            setViewInfo(<div class="card-info-starship">
                <div><span><strong>Name: </strong> {response.data.name}</span></div>
                <div><span><strong>Model: </strong> {response.data.model}</span></div>
                <div><span><strong>Passengers: </strong> {formatNumberInt(response.data.passengers)}</span></div>
            </div>
            )
        }).catch(function (err) {
            setViewInfo(<div class="card-info-starship"> <span>Elemento não disponivel no momento!</span></div>)
        })
    }

    useEffect(() => {
        request(1)
    }, []);


    return (
        <div class="row row-list">
            <div class="col-md-7">
                <h1>Starships</h1>
                <div>
                    {starships.map((item, index) => (
                        <button key={index} class="btn btn-warning btn-block btn-starship" onClick={() => getDetails(item.url)}>{item.name}</button>
                    ))
                    }
                </div>
                <div class="btn-starship mt-3 btn-block text-center" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-dark" onClick={() => request(previous)}>Previous</button>
                    <button type="button" class="btn btn-dark ml-1" onClick={() => request(next)}>Next</button>
                    <a href="/starships/stops" class="btn btn-dark ml-1">Stops</a>
                    <a href="/starships/best" class="btn btn-dark ml-1">Best starship</a>
                </div>
            </div>
            <div class="info-starship col-md-5 mt-5">
                {viewInfo}
                <img src={Space} alt="space" />
            </div>
        </div>
    )
}