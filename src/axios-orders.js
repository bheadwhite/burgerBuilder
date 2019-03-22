import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-84f8e.firebaseio.com/'
})

export default instance