import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCitiesRequest } from "../../store/modules/states/actions";
import { showCityDataRequest } from "../../store/modules/dataCity/actions";
import api from "../../services/api";
import "./style.css"

export default function Home() {
    const dispatch = useDispatch()

    const cities = useSelector(state => state.states)
    const dataCity = useSelector(state => state.dataCity)

    const [states, setStates] = useState([])

    useEffect(() => {
        async function loadStates() {
            const response = await api.get('estados');
            setStates(response.data)
        }
        loadStates()
    }, []);

    function fetchCities(sigla) {
        let getSigla = sigla.target.value
        dispatch(showCitiesRequest(getSigla))
    }

    function cityData(id) {
        let getId = id.target.value
        dispatch(showCityDataRequest(getId))
    }

    return (
        <div className="Home-Container">
            <section className="home">
            <select name="states" className="select-States" onChange={fetchCities} defaultValue={'DEFAULT'}>
                <option disabled value="DEFAULT">Selecione um Estado</option>
                    {states.map((states) => (
                            <option
                            value={states.sigla}
                            key={states.id}
                            >{states.nome}</option>
                    ))}
                </select>

                <select name="states" className="select-Cities" onChange={cityData} defaultValue={'DEFAULT'}>
                <option disabled value="DEFAULT">Selecione uma cidade</option>
                    {cities[0]?.map((citie) => (
                        <option
                        value={citie.id}
                        key={citie.id}
                        >{citie.nome}</option>
                    ))}
                </select>

                <div className="dataCity">
                    {dataCity.map((data) => (
                        <section key={data.id} className="data">
                            <div>
                                <span>Microrregião:</span>
                                <input value={data.microrregiao} disabled/>
                            </div>
                            <div>
                                <span>Mesorregião:</span>
                                <input value={data.mesorregiao} disabled/>
                            </div>
                            <div>
                                <span>UF:</span>
                                <input value={data.uf} disabled/>
                            </div>
                            <div>
                                <span>Região:</span>
                                <input value={data.regiao} disabled/>
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    );
}