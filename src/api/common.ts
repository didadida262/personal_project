import axios from 'axios'
import { ROOT } from '../url/main'


const commonAPI = {
    // ajaxx() {
    //     const xml = new XMLHttpRequest()
    //     xml.onreadystatechange = function() {
    //         if(xml.status === 200 && xml.readyState == 4) {
    //             return xml.responseText
    //         }
    //     }
    //     xml.open("GET","http://127.0.0.1:5000/word")
    //     xml.send()
    // }
    getWorld() {
        return axios.get(`${ROOT}/word`)
    },

    postUserInfo(params: any) {
        return axios.post(`${ROOT}/postUserInfo`, params)
    }

}


export { commonAPI }