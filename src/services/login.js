import axios from "axios";

const baseUrl = 'http://localhost:3001/login'

const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    console.log(data)
    return data
}

export default { login }