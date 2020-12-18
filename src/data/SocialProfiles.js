import React from 'react';
import SOCIAL_PROFILES from './socialProfile';

const SocialProfile = (props) => {
  const { image, link } = props.socialProfile;

  return (
    <span>
      <a href={link}>
        <img src={image} alt='img' className='fab' />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h2 className='connect'>Connect with me</h2>
    <div>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => (
        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
      ))}
    </div>
  </div>
);

export default SocialProfiles;
