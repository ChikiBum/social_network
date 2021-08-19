import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/6339721_m.jpg'
import { NavLink } from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={ (e) =>{ props.onPageChenged(p) }}>{p}</span>
                })}
            </div>
            {
            props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>UNFOLLOW</button> : <button onClick={() => props.follow(u.id)}>FOLLOW</button>}
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.fullstatusName}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            )
            }
        </div>
    )
}

export default Users;