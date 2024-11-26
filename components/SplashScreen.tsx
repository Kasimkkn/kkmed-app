import { StyledImage } from '@components/shared/StyledComponents';
import React from 'react';

const SplashScreen = () => {

  return (
  <StyledImage source={require('../assets/images/splash.png')} className="w-full h-full" />
  );
};

export default SplashScreen;
