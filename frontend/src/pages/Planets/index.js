import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'
import Space from '../../assets/space.png';

export default function Planets() {
    function formatNumberInt(num) {
        let numInt = parseInt(num)
        if (numInt && numInt !== NaN)
            return new Intl.NumberFormat().format(numInt)
        else
            return num
    }

    const [planets, setPlanets] = useState([])
    const [viewInfo, setViewInfo] = useState("")
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()

    function request(page) {
        if (page && page !== "")
            api.get('/api/planet/page/' + page).then(response => {
                setPlanets(response.data.results)
                let nextSplit = (typeof response.data.next === 'string') ? response.data.next.split("=") : ""
                let previousSplit = (typeof response.data.previous === 'string') ? response.data.previous.split("=") : ""
                setNext(parseInt(nextSplit[1]))
                setPrevious(parseInt(previousSplit[1]))
            })
    }

    function getDetails(currentUrl) {
        let aux = currentUrl.split("/")
        let id = aux[aux.length - 2]

        api.get('/api/planet/' + id).then(response => {
            setViewInfo(<div class="card-info-planet">
                <div><span><strong>Name: </strong> {response.data.name}</span></div>
                <div><span><strong>Climate: </strong> {response.data.climate}</span></div>
                <div><span><strong>Population: </strong> {formatNumberInt(response.data.population)}</span></div>
            </div>
            )
        }).catch(function (err) {
            setViewInfo(<div class="card-info-planet"> <span>Elemento não disponivel no momento!</span></div>)
        })
    }

    useEffect(() => {
        request(1)
    }, []);


    return (
        <div class="row row-list">
            <div class="col-md-7">
                <h1>Planets</h1>
                <div>
                    {planets.map((item, index) => (
                        <button key={index} class="btn btn-warning btn-block btn-planet" onClick={() => getDetails(item.url)}>{item.name}</button>
                    ))
                    }
                </div>
                <div class="btn-planet mt-3 btn-block text-center" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-dark" onClick={() => request(previous)}>Previous</button>
                    <button type="button" class="btn btn-dark ml-1" onClick={() => request(next)}>Next</button>
                </div>
            </div>
            <div class="info-planet col-md-5 mt-5">
                {viewInfo}
                <img src={Space} alt="space"/>
            </div>
        </div>
    )
}