

const apiURL = 'https://randomuser.me/api/?results=5'

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
                    const image = people.picture.medium
                    const id= people.id.value
                    return { names, surname, city, country, image, id }
                })
                return users
            }
        })
}

export default getUsers