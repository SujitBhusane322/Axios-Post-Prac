import axios from 'axios'
export const AXIOS_SINGLETON=axios.create({
     baseURL: 'https://jsonplaceholder.typicode.com',
})