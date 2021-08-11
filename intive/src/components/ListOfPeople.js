import React, { useEffect, useState } from 'react'
import People from './People'
import getUsers from '../services/getUsers.js'
import './ListOfPeople.css'

const ListOfPeople = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        getUsers().then(users => setusers(users))
    }, [])

    return (
        <React.Fragment>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-6 g-7">
                    {
                        users.map(({ id, image, names, surname, city, country, cell, email}) =>
                            <div class="col">
                                <People
                                    key={id}
                                    image={image}
                                    names={names}
                                    surname={surname}
                                    city={city}
                                    country={country}
                                    cell={cell}
                                    email={email}
                                />
                            </div>
                        )
                    }
                </div>
            </div>

        </React.Fragment>
    )
}

export default ListOfPeople
