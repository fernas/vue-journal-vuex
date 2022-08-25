import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyA0X_RPJobI773H54llCNEVPtowYa6kmWI'
    }
})

export default authApi