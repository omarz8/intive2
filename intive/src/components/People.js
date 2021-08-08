import React, { useReducer } from 'react'
import { types } from '../services/Actions';
import StoreReducer, { InitialStore } from '../services/StoreReducer'
import './People.css';

const People = ({ image, names, surname, city, country }) => {

    const [store, dispatch] = useReducer(StoreReducer, InitialStore)
    const { selectedPeople, peopleDetail } = store;
    console.log(selectedPeople)
    console.log(peopleDetail)

    return (
        <div class="card">
            <img src={image} class="card-img-top img-fluid" alt="..."
                onClick={() =>
                    dispatch(
                        {
                            type: types.newPeople,
                            payload: [{ image: image, names: names, surname: surname, city: city, country: country }]
                        }
                    )
                }
            />
            <div class="card-body">
                <h5 class="card-title text-secondary">{names} &nbsp; {surname}</h5>
                <p class="card-text text-secondary">{city}</p>
                <p class="card-text text-secondary">{country}</p>
            </div>
        </div>
    )
}

export default People
