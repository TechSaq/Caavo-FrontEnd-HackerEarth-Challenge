import React from 'react'
import CreateGroupDetails from '../CreateGroupDetails'
import UsersList from '../UsersList/UsersList'
import styles from './CreateGroup.module.css'

function CreateGroup({data}) {
    return (
        <>
            <div
                style={{
                fontSize: '1.7rem',
                marginBottom: '20px',
                fontWeight: 'bold',
                color: '#ddd',
                }}
            >
                Create Group
            </div>
            <CreateGroupDetails/>
            <UsersList
                data={data}
            />
            <div className={styles.cta_wrapper}>
                <button className={styles.btn_update}>Update</button>
                <button className={styles.btn_remove}>Remove</button>
            </div>
        </>
    )
}

export default CreateGroup
