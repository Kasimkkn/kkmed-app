import {
  StyledPressable,
  StyledText,
} from '@components/shared/StyledComponents';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
}

const Button = ({
  title,
  onPress,
  bgColor = 'bg-dark',
  textColor = 'text-white',
}: ButtonProps) => {
  return (
    <StyledPressable
      className={`rounded-lg py-3 my-2 ${bgColor} ${textColor}`}
      onPress={onPress}
    >
      <StyledText
        className={`text-center text-lg font-bold ${textColor} capitalize`}
      >
        {title}
      </StyledText>
    </StyledPressable>
  );
};

export default Button;
