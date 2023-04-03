/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseURL, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseURL}/${id}`)
}

const update = (id, changedPerson) => {
    const request = axios.put(`${baseURL}/${id}`, changedPerson)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    deletePerson,
    update
}
