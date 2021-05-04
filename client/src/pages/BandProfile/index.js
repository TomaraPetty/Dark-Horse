import React from 'react';
import Wrapper from '../../components/Wrapper';
import ProfileTop from '../../components/Profile/ProfileTop';
import ProfileAbout from '../../components/Profile/ProfileAbout';
import MapField from '../../components/MapField';

const BandProfile = () => {
  return (
    <Wrapper>
      <ProfileTop />
      <MapField />
    </Wrapper>
  );
};


export default BandProfile;