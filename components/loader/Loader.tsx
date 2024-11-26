import React from 'react';
import { StyledImage } from '@components/shared/StyledComponents';
const Loader: React.FC = () => {
  return (
    <StyledImage
      className='w-6 h-6 animate-spin'
      src='https://www.svgrepo.com/show/448500/loading.svg'
      alt='Loading icon'
    ></StyledImage>
  );
};

export default Loader;
