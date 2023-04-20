import axios from "axios"


const URLXML = 'https://feeds.feedburner.com/crhoy/wSjk';
const URL = 'http://localhost:4000/';
export const getNewsByUser = async (data) => {//returns News associate to one user


    try {
        const result = await axios.get(`${URL}news?user_id=${data.user_id}`, data, { headers: { 'Content-Type': 'application/json' } });
        if (result.status === 200) {

            return { error: false, data: result.data, msg: result.data.msg };
        }
        return { error: true, data: null, msg: 'Error interno del servidor' };
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.msg) {
            return { error: true, data: null, msg: error.response.data.msg };
        }
        console.log(error.response)
        return { error: true, data: null, msg: 'Error interno del servidor' };
    }
}

export const getNewsByCategory = async (data) => {//returns New filter by category


    try {
        const result = await axios.get(`${URL}news?user_id=${data.user_id}&category_id=${data.category_id}`, data, { headers: { 'Content-Type': 'application/json' } });
        if (result.status === 200) {

            return { error: false, data: result.data, msg: result.data.msg };
        }
        return { error: true, data: null, msg: 'Error interno del servidor' };
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.msg) {
            return { error: true, data: null, msg: error.response.data.msg };
        }
        console.log(error.response)
        return { error: true, data: null, msg: 'Error interno del servidor' };
    }
}

export const getNewsXML = async () => {//returns New filter by category

    try {
        const result = await axios.get(URLXML);
        if (result.status === 200) {

            return { error: false, data: result.data, msg: result.data.msg };
        }
        return { error: true, data: null, msg: 'Error interno del servidor' };
    } catch (error) {
        if (error && error.response && error.response.data && error.response.data.msg) {
            return { error: true, data: null, msg: error.response.data.msg };
        }
        console.log(error.response)
        return { error: true, data: null, msg: 'Error interno del servidor' };
    }


    


}