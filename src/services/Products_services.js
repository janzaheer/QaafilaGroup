import axios from 'axios';

export async function Products() {
    const resp = await axios.get('https://dummyjson.com/products?limit=50')
    return resp.data
}