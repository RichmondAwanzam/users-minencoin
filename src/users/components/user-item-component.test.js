import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {UserViewItem} from './user-item-component'
import {BrowserRouter} from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    user:JSON.stringify(`{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }`)
  }

  const enzymeWrapper = mount(<BrowserRouter><UserViewItem {...props} /></BrowserRouter>)

  return {
    props,
    enzymeWrapper
  }
}

describe('user list components', () => {
  describe('A single user', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('a').hasClass('pointer')).toBe(true)
      expect(enzymeWrapper.find('span').hasClass('app-font-size-primary')).toBe(true)
      

   
    })

    // it('should call addTodo if length of text is greater than 0', () => {
    //   const { enzymeWrapper, props } = setup()
    //   const input = enzymeWrapper.find('TodoTextInput')
    //   input.props().onSave('')
    //   expect(props.addTodo.mock.calls.length).toBe(0)
    //   input.props().onSave('Use Redux')
    //   expect(props.addTodo.mock.calls.length).toBe(1)
    // })
  })
})