import React,  { useEffect, useState} from 'react'
import People from './People'
import getUsers from '../services/getUsers.js'

const ListOfPeople = () => {
    const [users, setusers] = useState([])
    console.log(users)

    useEffect(() => {
        getUsers().then(users => setusers(users))
    }, [])


    return users.map(({ id, image, names, surname, city, country }) =>
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

export default ListOfPeople
