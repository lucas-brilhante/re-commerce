import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

export const fetcher = (url: string) => api.get(url).then(res => res.data)
