import { StyledText, StyledView } from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import React from 'react';

interface Props {
  title: string;
  icon: string;
  url: string;
}
const ProfileOption = ({ title, icon, url }: Props) => {
  return (
    <Link
      href={url as Href<string>}
      className='relative px-4 py-4 flex flex-row justify-between bg-primary shadow-lg my-1 rounded-lg'
    >
      <StyledView className='flex-row items-center'>
        <Ionicons name={icon as any} size={28} color='black' />
        <StyledText className='ml-4 text-black text-lg'>{title}</StyledText>
      </StyledView>
    </Link>
  );
};

export default ProfileOption;
