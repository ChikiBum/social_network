import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  } 
    return (
        <div  >
          <div>
            <img className={classes.content_img} src='https://content2.rozetka.com.ua/goods/images/big/17599435.jpg' />
          </div>

          <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            ava + desc
          </div>

        </div>
      )
}


export default ProfileInfo;