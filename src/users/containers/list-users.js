import React from 'react';
import { connect } from 'react-redux';
import { fetchusers, saveUser } from '../actions';
import { UserViewItem } from '../components/user-item-component';
import SearchField from '../../widgets/search-widget';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import addUserIcon from '../../svgs/add-user.svg';
import { EModal } from '../../widgets/modal';
import UserForm from './user-form';
import { LoadingWidget } from '../../widgets/loading-widget'
class UsersList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            openModal: false,
            users: []
        }
        const { dispatch } = this.props;
        if (this.props.users.length<1){
            dispatch(fetchusers());
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.users !== nextProps.users) {
            return {
                users: nextProps.users
            };
        }
        // Return null to indicate no change to state.
        return null;
    }


    createNewUser = (userData) => {
        const { dispatch } = this.props;
        dispatch(saveUser(userData, () => {
            this.setState({ openModal: false })
        }))
    }

    showUsersInView() {
        return this.state.users.map((user, index) => {
            return (<UserViewItem key={user.id + index} user={user} />)
        })
    }

    openDialogToCreateUser = evt => {
        this.setState({ openModal: true });
    }
    doSearch = (value) => {
        let search = this.props.users.filter(data => data.name.includes(value))
        this.setState({ users: search })

    }
    cancelClick=()=>{
        this.setState({ openModal: false });
    }

    render() {
        return (
            <div>
                <SearchField doSearch={this.doSearch} />
                <div style={{ padding: '0 20px' }}>
                    {
                        this.showUsersInView()
                    }
                    {this.props.isFetchingUsers && <LoadingWidget label="Loading, please wait" />}
                </div>
                <FloatingActionButton onClick={this.openDialogToCreateUser} backgroundColor="#1a237e" style={{ position: 'fixed', bottom: '20px', right: '130px' }}>
                    <img src={addUserIcon} width="30px" height="30px" alt='img' />
                </FloatingActionButton>
                <EModal isOpen={this.state.openModal}>
                    <UserForm onSubmitUserForm={this.createNewUser}  parentIsPopUp={true} cancelClick={this.cancelClick}/>
                </EModal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { users, isFetchingUsers } = state.users
    return { users, isFetchingUsers }
}
export default connect(mapStateToProps)(UsersList);