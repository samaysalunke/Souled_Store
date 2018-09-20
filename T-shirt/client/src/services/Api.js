import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://api.thesouledstore.com/api/v1/listing/tags/`
  })
}