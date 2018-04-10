import * as types from '../constants/actions_types'
export function fetchusers() {
    return dispatch => {

        dispatch({
            type: types.FETCHING_USERS,
            actionStatus: true
        })

       return fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.FETCHING_USERS,
                    actionStatus: false
                })
                dispatch({
                    type: types.RECEIVED_USERS,
                    data: json || []
                })
            })
    }
}


export function fetchSingleUser(userId) {
    return dispatch => {
        resetActiveUser();
        dispatch({
            type: types.FETCHING_SINGLE_USER,
            actionStatus: true
        })
        if(userId>10){
            let user =localStorage.getItem(userId);
            console.log('user from store',user);
            dispatch({
                type: types.FETCHING_SINGLE_USER,
                actionStatus: false
            })
            dispatch({
                type: types.RECEIVED_SINGLE_USER,
                data: JSON.parse(user) || {}
            })

            return;
        }

        return fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.FETCHING_SINGLE_USER,
                    actionStatus: false
                })
                dispatch({
                    type: types.RECEIVED_SINGLE_USER,
                    data: json || {}
                })
            })
    }
}
export function saveUser(userData, callback) {
    return (dispatch) => {
        fetch(`http://jsonplaceholder.typicode.com/users/`, {
            headers: { 'content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.APPEND_USER_TO_FRONT,
                    data: json
                })
                callback();
            })
    }
}
export function deleteUser(userId, callback) {
    return (dispatch) => {
        fetch(`http://jsonplaceholder.typicode.com/users/${userId}`, { method: 'delete' })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.RECEIVED_SINGLE_USER,
                    data: {}
                })
                dispatch({
                    type: types.DELETE_USER,
                    userId
                })
                
                callback();
            })
    }
}

export function updateUser(userId, userData) {
    return dispatch => {
        fetch(`http://jsonplaceholder.typicode.com/users/${userId}`, {
            headers: { 'content-type': 'application/json' },
            method: 'put',
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(json => {
                dispatch({type:types.UPDATE_USER,
                data:userData})

            })
    }
}
export function resetActiveUser() {
    return dispatch => {
        dispatch({
            type: types.RECEIVED_SINGLE_USER,
            data: {}
        })
    }
}