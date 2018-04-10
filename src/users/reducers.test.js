import userReducers from './reducers';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import * as types from '../constants/actions_types'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)



const INITIAL_STATE = {
  isFetchingUsers: false,
  users: [],
  activeUser: {}

}

describe(`Test suite for users's reducers`, () => {

  it('app should have initial state', () => {
    expect(userReducers(undefined,{})).toEqual(INITIAL_STATE);
  });
  
});

