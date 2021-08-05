import React, { useReducer } from 'react'
import { types } from '../services/Actions';
import StoreReducer, { InitialStore } from '../services/StoreReducer'

const People = ({ image, names, surname, city, country }) => {

    const [store, dispatch] = useReducer(StoreReducer, InitialStore)
    const { selectedPeople , peopleDetail } = store;
    console.log(selectedPeople)
    console.log(peopleDetail)

    return (
        <div>
            <img src={image} atl="imagen" onClick={() =>
            dispatch(
                {
                    type: types.newPeople,
                    payload: [{image: image, names: names, surname: surname, city: city, country: country}]
                }
            )
            } />
            <h6>{names} &nbsp; {surname}</h6>
            <h6>{city}</h6>
            <h6>{country}</h6>
        </div>
    )
}

export default People
