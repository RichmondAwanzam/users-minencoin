import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleUser, deleteUser, resetActiveUser, updateUser } from '../actions';
import { Link } from 'react-router-dom';
import UserForm from './user-form';
import { EModal } from '../../widgets/modal'
import { FlatButton } from 'material-ui';
import { withRouter } from 'react-router-dom'
class ViewUser extends React.Component {
    constructor(props, context) {
        super(props, context);
        const { dispatch } = this.props;
        const { match: { params } } = this.props;
        this.state = {
            userId: params.id,
            promptDelete: false
        }
        dispatch(fetchSingleUser(params.id))
    }
    confirmDeleteAction = evt => {
        const { dispatch } = this.props;
        this.setState({ promptDelete: true })
    }
    deleteUser = evt => {
        const { dispatch } = this.props;

        dispatch(deleteUser(this.state.userId, () => {
            this.setState({ promptDelete: false });
            window.dontFetchUser = true;
            this.props.history.push('/');
        }));


    }
    resetUser = (evt) => {
        this.props.dispatch(resetActiveUser())
    }

    updateUser = (userData) => {
        const { dispatch } = this.props;
        dispatch(updateUser(this.props.activeUser.id, userData))
    }
    render() {
        const promptActions = [<FlatButton label='no' onClick={() => { this.setState({ promptDelete: false }) }} />,
        <FlatButton label='yes' onClick={this.deleteUser} />]
        return (
            <div>
                <div style={{ display: 'flex', padding: '20px' }}>
                    <Link onClick={this.resetUser} style={{ textAlign: 'left', width: '50%' }} to='/'> <span>&#8592;</span>&nbsp;Back to Users</Link>
                    <div className="pointer" style={{ textAlign: 'right', fontSize: '13px', width: '50%', color: '#FF9719' }} onClick={this.confirmDeleteAction}>delete</div>
                </div>
                <UserForm onSubmitUserForm={this.updateUser} />
                <EModal isOpen={this.state.promptDelete} actions={promptActions}>
                    <div>Are you sure ,you want to delete this user</div>
                </EModal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { activeUser } = state.users
    return { activeUser }
}
export default withRouter(connect(mapStateToProps)(ViewUser));