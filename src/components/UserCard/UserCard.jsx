import React, { useState } from 'react'
import styles from './UserCard.module.css'

function UserCard({ data }) {
    
    const image = data?.Image;
    const name = data?.name;
    const id = data?.id;

    const [isChecked, setIsChecked] = useState(false)

    const handleCardClick = () => {
        setIsChecked(!isChecked)
    }
    
    return (
        <div className={styles.card_container} onClick={handleCardClick}>
            <input
                type="checkbox"
                className={styles.userCheck}
                name="userCheck"
                id={`user&{id}`} 
                onSelect={handleCardClick}
                onChange={handleCardClick}
                checked={isChecked ? true : false}
            />
            <img className={styles.avatar} src={image} alt={name} />
            <div className={styles.username}>{name}</div>
        </div>
    )
}

export default UserCard
