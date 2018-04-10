import React from 'react'
import {Link} from 'react-router-dom'
import noProfile from '../../svgs/no-profile-img.svg';
export const UserViewItem =(props)=>{
 
    return (
        <Link className="pointer"to={`/users/${props.user.id||''}`}>
        <div className='flex user-view'>
        <div>
            <img className="profile-image" alt='img'src={noProfile} height="50px" width="50px"/>
        </div>
        <div className='user-detail'>
            <span id="name" className='app-font-size-primary'>{props.user.name}</span>
            <div className='app-font-size-sec'>{props.user.email}</div>
            </div>
        </div>
        </Link>
    )
}