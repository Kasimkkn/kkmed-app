import React from 'react';
import {
  StyledImage,
  StyledText,
  StyledPressable,
  StyledView,
} from './StyledComponents';
interface ConcernProps {
  name: string;
  imageUrl: string;
}

const ConcernCard: React.FC<ConcernProps> = ({ name, imageUrl }) => {
  return (
    <StyledView className='flex flex-col gap-1 w-24 mr-4'>
      <StyledPressable className='bg-dark w-24 h-24 relative rounded-lg '>
        <StyledImage
          source={{ uri: imageUrl }}
          className='w-24 h-24 rounded-lg absolute'
        />
      </StyledPressable>
      <StyledText className='text-base font-bold text-dark uppercase text-center'>
        {name.split(' ')[0]}
      </StyledText>
    </StyledView>
  );
};

export default ConcernCard;
