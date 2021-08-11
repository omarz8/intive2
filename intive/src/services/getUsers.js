

const apiURL = 'https://randomuser.me/api/?results=80'

const getUsers = () => {
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { results } = response
            console.log(results)
            if(Array.isArray(results)) {
                const users = results.map(people => {
                    const names  = people.name.first
                    const surname = people.name.last
                    const city = people.location.city
                    const country = people.location.country
                    const image = people.picture.large
                    const id= people.id.value
                    const cell= people.cell
                    const email= people.email
                    return { names, surname, city, country, image, id, cell, email }
                })
                return users
            }
        })
}

export default getUsers