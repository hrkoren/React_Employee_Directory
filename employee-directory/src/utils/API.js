import axios from 'axios';

const apiURL = 'https://randomuser.me/api/?results=20&nat=us?inc=names,email,phone'

const api = {
    getEmployees: function () {
        return axios.get(apiURL);
    }
}

export default api;

