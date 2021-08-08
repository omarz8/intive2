import React, { useEffect, useState } from 'react'
import People from './People'
import getUsers from '../services/getUsers.js'

const ListOfPeople = () => {
    const [users, setusers] = useState([])
    console.log(users)

    useEffect(() => {
        getUsers().then(users => setusers(users))
    }, [])


    return (
        <div class="container d-flex justify-content-center align-items-center h-100">
            <div class="row row-cols-4 g-5">
                <div class="col">
                    {
                        users.map(({ id, image, names, surname, city, country }) =>
                            <People
                                key={id}
                                image={image}
                                names={names}
                                surname={surname}
                                city={city}
                                country={country}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListOfPeople
