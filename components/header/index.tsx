import { StyledText, StyledView } from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { ReactNode } from 'react';

interface HeaderProps {
  title: string;
  backUrl?: string;
  children?: ReactNode;
  className?: string;
}

const Header = ({ title, backUrl, children, className }: HeaderProps) => {
  return (
    <StyledView
      className={`flex-row items-center justify-center relative p-2  ${className}`}
    >
      {backUrl && (
        <Link href={backUrl as any} className='absolute left-0'>
          <Ionicons name='arrow-back' size={24} color='black' />
        </Link>
      )}

      <StyledText className='text-lg font-bold capitalize'>{title}</StyledText>

      {children && (
        <StyledView className='absolute right-0 flex flex-row items-center'>
          {children}
        </StyledView>
      )}
    </StyledView>
  );
};

export default Header;
