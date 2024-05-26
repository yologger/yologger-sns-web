import axios from 'axios';

const pms = axios.create({
    baseURL: `${process.env.REACT_APP_API}/api/pms/v1`
})

export * from './getPost'

export default pms