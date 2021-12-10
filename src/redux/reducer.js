import axios from 'axios';

const initialState = {
    username: '',
    profile_pic: ''
}

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'

export const updateUser = (user) => {
    let data = axios.get('/api/auth/me', { user }).then(res => res.data);
    return {
        type: UPDATE_USER,
        payload: data,
    }
}

export const logout = () => {
    let data = axios.post('/api/auth/logout').then(res => res.data)
    return {
        type: LOGOUT,
        payload: data,
    }
}

function Reducer(state = initialState, action){
    switch(action.type){
        case `UPDATE_USER`: {
            return {
                ...state,
                username: action.payload,
                profile_pic: action.payload,
            }
        }
        case `LOGOUT`: {
            return {
                username: '',
                profile_pic: '',
            }
        }
        default: {
            return state;
        }
    }
}

export default Reducer;