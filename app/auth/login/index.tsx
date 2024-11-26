import {
  StyledImage,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
const LoginScreen = () => {
  const router = useRouter();
  const [phoneNo, setPhoneNo] = useState('');

  const handleLogin = () => {
    if (!phoneNo || phoneNo.length !== 10) {
      ToastAndroid.show(
        'Please enter a valid phone number',
        ToastAndroid.SHORT
      );
      return;
    }
    router.push('/auth/verfiyotp');
  };

  return (
    <StyledView className='flex-1 bg-secondary'>
      <StyledView className='flex-1 justify-center items-center relative'>
        <StyledView className='absolute bottom-0 w-full h-[65%] bg-primary rounded-tl-[50px] px-6'>
          <StyledView className='mt-10 relative'>
            {/* <StyledText className='text-3xl text-center font-semibold text-dark'>
              LOGIN
            </StyledText> */}

            <StyledView className='w-full mt-6 flex flex-col'>
              <StyledText className='text-center text-base font-bold tracking-wider text-dark'>
                Enter Your Credential To
              </StyledText>
              <StyledText className='text-center text-base font-bold tracking-wider text-dark'>
                Login To Your Account
              </StyledText>
            </StyledView>
            <StyledView className='border pl-4 border-dark bg-input relative flex flex-row rounded-lg items-center mt-8'>
              {/* Phone Icon */}
              <FontAwesome
                name='phone'
                size={24}
                color='black'
                className='mr-3'
              />

              <StyledTextInput
                className='flex-1 py-4 px-4 rounded-lg text-lg text-dark'
                placeholder='Your phone number'
                keyboardType='numeric'
                onChangeText={(text) => setPhoneNo(text)}
                maxLength={10}
                value={phoneNo}
              />
            </StyledView>

            <StyledTouchableOpacity
              onPress={handleLogin}
              className='w-full bg-dark py-4 rounded-lg mt-4'
            >
              <StyledText className='text-white text-lg font-semibold text-center'>
                Get Otp
              </StyledText>
            </StyledTouchableOpacity>

            <StyledView className='flex flex-col gap-1 justify-center items-center mt-36'>
              <StyledText className='text-base text-dark'>
                By logging in, you agree to our
              </StyledText>
              <StyledText className='text-base font-semibold text-dark'>
                Terms of Services{' '}
                <StyledText className='text-base text-dark'> and </StyledText>{' '}
                Privacy Policy
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        <StyledView className='absolute top-12'>
          <StyledImage
            source={require('../../../assets/images/loginLogo.png')}
            className='w-56 h-56'
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default LoginScreen;
