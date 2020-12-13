import React, { useState } from 'react'
import ImageUploader from 'react-images-upload';
import styles from './CreateGroupDetails.module.css'


function CreateGroupDetails() {

    const [image, setImage] = useState(null)

    const handleImageUpload = (picture, file) => {
        setImage(file[0])
    }

    console.log(image)

    return (
        <div className={styles.createGroupDetailsContainer}>
            <div className={styles.left}>
                <img src={image} />
                <ImageUploader 
                    withIcon={false}
                    withLabel={false}
                    buttonText='Upload Group Image'
                    singleImage={true}
                    onChange={handleImageUpload}
                /> 
            </div>
            <div className={styles.right}>
                <div className={styles.row}>
                    <label htmlFor="groupName">Name</label>
                    <input placeholder='Enter Group Name...' type="text" name='groupName' id='groupName'/>
                </div>
                <div className={styles.row}>
                    <label htmlFor="groupDesc">Description</label>
                    <input placeholder='Enter Group Description...' type="text" name='groupDesc' id='groupDesc'/>
                </div>
            </div>
        </div>
    )
}

export default CreateGroupDetails
