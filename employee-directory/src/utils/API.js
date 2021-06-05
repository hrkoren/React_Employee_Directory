import axios from 'axios';

const apiURL = 'https://randomuser.me/api/?results=20&nat=us'

export default {
    getData: function () {
        return axios.get(apiURL);
    }
}
