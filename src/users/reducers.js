import * as types from '../constants/actions_types'
const INITIAL_STATE = {
    isFetchingUsers: false,
    users: [],
    activeUser: {}

}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.CREATED_USER:
            return { ...state, activeuser: action.data }

        case types.FETCHING_USERS:
            return { ...state, isFetchingUsers: action.actionStatus }
        case types.RECEIVED_USERS:
            return { ...state, users: action.data }
        case types.RECEIVED_SINGLE_USER:
            return { ...state, activeUser: action.data }

        case types.APPEND_USER_TO_FRONT:
            let users = state.users;
            action.data.id = users.length + 1;
            let newuser = action.data
            users.splice(0, 0, newuser);
            //post/ create api is not persistent so put data in local storage
            localStorage.setItem(newuser.id, JSON.stringify(newuser));
            console.log('user kept in store is', localStorage.getItem(newuser.id));
            return { ...state, users: users }

        case types.DELETE_USER:
            let userss = state.users;
            let index = userss.findIndex(user => user.id == action.userId);
            console.log('index to delete', index);
            userss.splice(index, 1);
            return { ...state, users: userss }

        case types.UPDATE_USER:
            userss = state.users;
            index = userss.findIndex(user => user.id == action.data.id);
            userss[index] = action.data
            return { ...state, users: userss }


        default:
            return state
    }


} 