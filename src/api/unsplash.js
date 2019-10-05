import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0f9e460495be249ec3ee3121d0bfda42e716f6dce659534755c39c8172d731a5'
    }
});