import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Z0zPQF2J5L2Sf_MCNKoJCj84ZAYzcJVvCVYge62_Xxo'
    }
});