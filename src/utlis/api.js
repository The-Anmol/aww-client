import axios from "axios";



export const baseURL = "http://localhost:3000/";


export const instance = axios.create({
    baseURL,
    timeout: 500000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const responseBody = response => response.data;

const requests = {
    get: (url) => instance.get(url).then(responseBody),

    post: (url, body) => instance.post(url, body).then(responseBody),

    put: (url, body) => instance.put(url, body).then(responseBody),

    delete: (url) => instance.delete(url).then(responseBody),
};

export const memberApi = {
    fetch() {
        return requests.get(`/member`);
    },
};
export const familyApi = {
    fetch() {
        return requests.get(`/family`);
    },
};
export const houseApi = {
    fetch() {
        return requests.get(`/house`);
    },
};
export const streetApi = {
    fetch() {
        return requests.get(`/street`);
    },
    insert(body) {
        return requests.post(`/street`, body)
    }
};
