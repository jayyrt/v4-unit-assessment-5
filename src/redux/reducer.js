import axios from 'axios';

const initialState = {
    username: '',
    profile_pic: ''
}

const UPDATE_USER = 'UPDATE_USER'

export const updateUser = (user) => {
    let data = axios.get('/api/auth/me', { user }).then(res => res.data);
    return {
        type: UPDATE_USER,
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
        default: {
            return state;
        }
    }
}

export default Reducer;