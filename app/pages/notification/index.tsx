import Header from '@components/header';
import { ROUTES } from 'core/utils/routes';
import { notifications } from 'data/notification';
import { styled } from 'nativewind';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledScrollView = styled(ScrollView);

const Notification = () => {
  return (
    <StyledScrollView className='bg-secondary px-4 py-2'>
      {/* Header */}
      <Header title='Notification' backUrl={ROUTES.CUSTOMER.TABS.HOME} />

      {/* Notifications */}
      {notifications.map((notification) => (
        <StyledView
          key={notification.id}
          className='flex-row justify-center items-center bg-primary p-3 rounded-xl my-1'
        >
          <StyledView className='flex-1'>
            <StyledText className='text-dark text-base font-bold'>
              {notification.message}
            </StyledText>
            <StyledText className='text-gray-700 font-medium text-sm mt-2'>
              {notification.time}
            </StyledText>
          </StyledView>
        </StyledView>
      ))}
    </StyledScrollView>
  );
};

export default Notification;
