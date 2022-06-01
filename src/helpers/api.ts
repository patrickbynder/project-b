import axios from 'axios';

const urlRandomUsers = 'https://api.randomuser.me/?results=5';

export const API = {
    fetchUsers: () =>
        axios
            .get(urlRandomUsers)
            .then(({ data }) => data)
            .catch((errorMessage) => console.log('ERROR!: ', errorMessage)),
};
