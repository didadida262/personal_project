import axios from 'axios'
import { ROOT } from '../url/main'

const commonAPI = {
    getUser() {
        return axios.get(`${ROOT}/admin`)
    }
}


export { commonAPI }