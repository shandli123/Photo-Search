import axios from 'axios'


//creating instance of axios client
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID uQuIr7c7m3z_ZMZSxEQaFncupqMmEOKe_6gcgahGA6k'
    }
});

