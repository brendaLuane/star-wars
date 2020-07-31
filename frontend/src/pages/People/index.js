import React, { useEffect, useState } from 'react';

import api from '../../services/api'

import './styles.css'
import Space from '../../assets/darth-vader.jpg';

export default function People() {
    function formatNumberFloat(num) {
        let numFlt = parseFloat(num)
        if (numFlt && numFlt !== NaN)
            return parseFloat(numFlt.toFixed(2));
        else
            return num
    }

    const [peoples, setPeoples] = useState([])
    const [viewInfo, setViewInfo] = useState("")
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()

    function request(page) {
        if (page && page !== "")
            api.get('/api/people/page/' + page).then(response => {
                setPeoples(response.data.results)
                let nextSplit = (typeof response.data.next === 'string') ? response.data.next.split("=") : ""
                let previousSplit = (typeof response.data.previous === 'string') ? response.data.previous.split("=") : ""
                setNext(parseInt(nextSplit[1]))
                setPrevious(parseInt(previousSplit[1]))
            })
    }

    function getDetails(currentUrl) {
        let aux = currentUrl.split("/")
        let id = aux[aux.length - 2]

        api.get('/api/people/' + id).then(response => {
            setViewInfo(<div class="card-info-people">
                <div><span><strong>Name: </strong> {response.data.name}</span></div>
                <div><span><strong>Birth year: </strong> {response.data.birth_year}</span></div>
                <div><span><strong>Gender: </strong> {response.data.gender}</span></div>
                <div><span><strong>Height: </strong> {formatNumberFloat(response.data.height/100)}</span></div>
                <div><span><strong>Mass: </strong> {formatNumberFloat(response.data.mass)}</span></div>
            </div>
            )
        }).catch(function (err) {
            setViewInfo(<div class="card-info-people"> <span>Elemento não disponivel no momento!</span></div>)
        })
    }

    useEffect(() => {
        request(1)
    }, []);


    return (
        <div class="row row-list">
            <div class="col-md-7">
                <h1>People</h1>
                <div>
                    {peoples.map((item, index) => (
                        <button key={index} class="btn btn-warning btn-block btn-people" onClick={() => getDetails(item.url)}>{item.name}</button>
                    ))
                    }
                </div>
                <div class="btn-people mt-3 btn-block text-center" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-dark" onClick={() => request(previous)}>Previous</button>
                    <button type="button" class="btn btn-dark ml-1" onClick={() => request(next)}>Next</button>
                </div>
            </div>
            <div class="info-people col-md-5 mt-5">
                {viewInfo}
                <img src={Space} alt="space"/>
            </div>
        </div>
    )
}