import axios from 'axios'

// axios functions enabling client to interface with database

export default {
    // fetch all states data
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    // updated visited data for individual states
    setVisited(stateName, visited) {
        let data = {visited: visited}
        return axios.patch('/api/states/' + stateName, data).then( response => {
            return response.data
        })
    }
}