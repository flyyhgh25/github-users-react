import axios from 'axios'

const UseFetch = axios.create({
    baseURL:'https://api.github.com',
    headers: {
        Accept : 'application/json'
    }
});

export default UseFetch