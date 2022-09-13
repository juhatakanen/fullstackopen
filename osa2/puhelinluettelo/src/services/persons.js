import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'
// const baseUrl = 'https://arcane-hamlet-26918.herokuapp.com/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

const put = (newPersonToUpdate) => {
  return axios.put(`${baseUrl}/${newPersonToUpdate.id}`, newPersonToUpdate)
}

const exportedObject = {
    getAll,
    create,
    deletePerson,
    put
}

export default exportedObject