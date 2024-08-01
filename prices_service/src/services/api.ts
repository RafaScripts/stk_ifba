import axios from 'axios';

const api = axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
        'x-rapidapi-key': '0e0c63700emsh5ba4628c0e1e9f9p16284fjsnd25efb3adf2d',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    },
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '300',
        offset: '0'
    },
});

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'x-rapidapi-key': '0e0c63700emsh5ba4628c0e1e9f9p16284fjsnd25efb3adf2d',
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
};

export default api;