import React, { useReducer } from 'react'
import { types } from '../services/Actions';
import StoreReducer, { InitialStore } from '../services/StoreReducer'
import useModal from '../services/useModal';
import './People.css'
import PeopleModal from './PeopleModal';



const People = ({ image, names, surname, city, country, cell, email }) => {

    const [store, dispatch] = useReducer(StoreReducer, InitialStore)
    const { isOpen, toggle } = useModal()
    const { peopleDetail } = store;
    console.log(peopleDetail)
    // console.log(isOpen)

    const select = () => {
        dispatch(
            {
                type: types.newPeople,
                payload: [{ image: image, names: names, surname: surname, city: city, country: country, cell: cell, email: email }]
            }
        )
        toggle()
    }

    return (
        <div>

            <div class="card h-100 zoom">
                <img src={image} class="card-img-top img-fluid" alt="..."
                    onClick={() => {
                        select()
                    }
                    }
                />
                <div class="card-body d-block ">
                    <h5 class="card-title text-secondary text-center">{names} &nbsp; {surname}</h5>
                    <p class="card-text text-secondary text-center">{city}</p>
                    <h6 class="card-text text-secondary text-center">{country}</h6>
                </div>

                <PeopleModal
                    isOpen={isOpen}
                    toggle={toggle}
                    peopleDetail={peopleDetail}
                />
            </div>
        </div>
    )
}

export default People
