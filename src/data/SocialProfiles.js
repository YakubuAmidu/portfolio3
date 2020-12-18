import React from 'react';
import SOCIAL_PROFILES from './socialProfile';

const SocialProfile = (props) => {
  const { image, link } = props.socialProfile;

  return (
    <span>
      <a href={link}>
        <img src={image} alt='img' />
      </a>
    </span>
  );
};

const SocialProfiles = () => {
  return (
    <div className='socialmedia'>
      <h1 className='contact'>Contact</h1>
      <div>
        {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
          <SocialProfile socialProfile={SOCIAL_PROFILES} />;
        })}
      </div>
    </div>
  );
};

export default SocialProfiles;
