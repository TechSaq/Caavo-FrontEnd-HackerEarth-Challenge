import React from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UsersList.module.css'

const UsersList = ({data}) => {
    return (
        <div className={styles.usersListContainer}>
            {
                data.map(item => {
                    return (
                        <UserCard key={item.id} data={ item }/>
                    )
                })
            }
        </div>
    );
}

export default UsersList;
