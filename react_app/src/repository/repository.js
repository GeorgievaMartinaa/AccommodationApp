import axios from '../custom-axios/axios';

const AppService = {
    fetchAccommodations: () => {
        return axios.get(`/accommodations`);
    },

    fetchHosts: () => {
        return axios.get(`/host`);
    },

    fetchCategories: () =>
    {
        return axios.get(`/categories`)
    },

    deleteAccommodation: (id) => {
        return axios.post(`/accommodations/delete/${id}`)
    },

    editAccommodation: (id, name, category, hostId, numRooms) => {
        return axios.post(`/accommodations/edit/${id}`, {
            "name": name,
            "category": category,
            "hostId": hostId,
            "numRooms": numRooms
        });

    },

    addAccommodation: (name, category, hostId, numRooms) => {
        return axios.post(`/accommodations/add`,
            {
                "name": name,
                "category": category,
                "hostId": hostId,
                "numRooms": numRooms
            });
    },

    getAccommodation: (id) => {
        return axios.get(`/accommodations/${id}`)
    },

    rentAccommodation: (id) => {
        return axios.post(`/accommodations/rent/${id}`)
    }
}

export default AppService;