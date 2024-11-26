import { styled } from 'nativewind';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ROUTES } from 'core/utils/routes';
import ProfileOption from '@components/profileOptions/ProfileOption';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

export default function ProfileScreen() {
  return (
    <StyledScrollView className='bg-secondary p-4'>
      <StyledView className='bg-dark rounded-lg mb-4'>
        <StyledView className='flex-col items-center p-4 gap-2'>
          <StyledImage
            source={require('@assets/images/user.png')}
            className='w-20 h-20 rounded-full bg-primary'
          />
          <StyledView className='flex items-center flex-col gap-1'>
            <StyledText className='text-primary text-lg font-bold'>
              Anni
            </StyledText>
            <StyledText className='text-gray-400'>anni@gmail.com</StyledText>
            <StyledText className='text-green-400'>
              Registered Since Dec 202X
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledTouchableOpacity className='absolute top-1/2 right-6'>
          <Ionicons name='create-outline' size={32} color='white' />
        </StyledTouchableOpacity>
      </StyledView>
      <ProfileOption
        title='My Wishlist'
        icon='heart-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.WISHLIST}
      />
      <ProfileOption
        title='My Prescription'
        icon='medkit-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.MYPRESCRIPTION}
      />
      <ProfileOption
        title='Payment Methods'
        icon='card-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.PAYMENT}
      />
      <ProfileOption
        title='Your Addresses'
        icon='location-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.ADDRESS}
      />
      <ProfileOption
        title='Pill Reminder'
        icon='alarm-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.PILL_REMINDER}
      />
      <ProfileOption
        title='Invite Friends'
        icon='person-add-outline'
        url={ROUTES.CUSTOMER.PAGES.PROFILE.INVITE_FRIENDS}
      />

      <StyledView className='flex flex-row flex-wrap items-center gap-2 mt-1 mb-24'>
        <StyledText className='p-4 w-[47.5%] text-center rounded-lg text-lg bg-primary text-black font-bold'>
          Need Help?
        </StyledText>
        <StyledText className='p-4 w-[47.5%] text-center rounded-lg text-lg bg-primary text-black font-bold'>
          About Us
        </StyledText>
      </StyledView>
    </StyledScrollView>
  );
}
