import axios from 'axios';

const bms = axios.create({
    baseURL: `${process.env.REACT_APP_API}/api/bms/v1`
})

export * from './getBoard'

export default bms