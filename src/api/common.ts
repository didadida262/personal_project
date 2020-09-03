import axios from 'axios'
import { ROOT } from '../url/main'

const commonAPI = {
    getWord() {
        return axios.get(`${ROOT}/word`)
    }
}


export { commonAPI }