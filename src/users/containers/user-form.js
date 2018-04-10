import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../../widgets/form-renders';
import noProfile from '../../svgs/no-profile-img.svg';
import {connect} from 'react-redux';
const validate = (values,props) => {

    const requiredFields = ['name', 'email']
    const errors = {}

    requiredFields.forEach(value => {
        if (!values[value]) {
            errors[value] = 'required';
        }
    })
  if (values.name) 
    if (!flagShortName(values.name)) {
        errors.name = 'name should at least two characters long';
    }
   
    if(values.email)
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'email is invalid';
    }
 



    return errors
}

function flagShortName(name) {
    return (name||'').length >= 2;

}


class UserForm extends React.Component {

    saveUserProfilesUser = (userData) => {
        const {onSubmitUserForm}=this.props;
        onSubmitUserForm(userData);
    }

    render() {
        const {handleSubmit} = this.props;
        console.log('from redux form',this.props)
        return (
            <div className="app-border" style={{ marginBottom: '40px', padding: '20px' }}>

                <div className="signup-form">
                    <div className='row'>
                       
                        <div className='flex'>
                            <div className="float-left" style={{ backgroundImage: noProfile, height: '106px', width: '106px' }}>
                                <img src={noProfile}
                                    className="profile-image" alt='no-profile' />

                            </div>
                            <div className="" style={{padding:'35px 25px',textAlign:'left'}}>
                                <div>{this.props.activeUser.name}</div>
                                <div>{this.props.activeUser.email}</div>
                            </div>
                           
                          
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(this.saveUserProfilesUser.bind(this))}>
                      
                        <div className='row'>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="name" label={'Full name'} id="name" component={renderField} />
                                <Field type="text" name="website" label={'Website'} id="website" component={renderField} />
                            </div>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="email" label={'Email'} id="email" component={renderField} />
                                <Field type="text" name="phone" label={'Phone Number'} id="phone" component={renderField} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="address.street" label={'Street'} id="street" component={renderField} />
                                <Field type="text" name="address.suite" label={'suite'} id="suite" component={renderField} />
                            </div>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="address.city" label={'City'} id="city" component={renderField} />
                                <Field type="text" name="address.zipcode" label={'Zip Code'} id="Zip Code" component={renderField} />
                            </div>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="address.geo.lat" label={'Geo Latitude'} id="lat" component={renderField} />
                                <Field type="text" name="address.geo.lng" label={'Geo Longitude'} id="lng" component={renderField} />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="company.name" label={'Company name'} id="comname" component={renderField} />
                                <Field type="text" name="company.catchPhrase" label={'Catch Phrase'} id="cphrase" component={renderField} />
                            </div>
                            <div className='col-12 col-xs-12 col-sm-6 col-md-6'>
                                <Field type="text" name="company.bs" label={'bs'} id="bs" component={renderField} />
                            </div>
                        </div>
                        <div className="form-control-signup-submit">

                            <div className="float-right">

                                {this.props.parentIsPopUp &&<div style={{display:'inline-block',padding:'0 20px',fontSize:'13px'}} className="pointer" onClick={this.props.cancelClick}>cancel</div>}
                                <div style={{display:'inline-block'}} >
                                <FlatButton className="create-user-button" hoverColor="#1a237e" backgroundColor={'#1a237e'} type='submit' primary={true}>
                                    <span style={{color:'#fff'}}>{this.props.isUpdatingUser ? 'Saving...' : 'Save'}</span>
                                </FlatButton>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
UserForm = reduxForm({
    form: 'user',
    validate,
    enableReinitialize: true
})(UserForm)

export default connect(state=>{
    const {activeUser}=state.users;
    console.log('user is in form',activeUser)
    
    return { initialValues :activeUser ,activeUser}
})(UserForm);