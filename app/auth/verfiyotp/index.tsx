import {
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledTouchableOpacity,
  StyledView,
} from '@components/shared/StyledComponents';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

const LoginScreen = () => {
  const size = 4; // Set the size for OTP dynamically
  const [otp, setOtp] = useState(new Array(size).fill(''));
  const [loading, setLoading] = useState(false);

  const refs = useRef<(TextInput | null)[]>(new Array(size).fill(null));

  const handleOtpChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return; // Simple validation: only digits allowed

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < size - 1) {
      refs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== '')) {
      handleVerifyOtp(newOtp);
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      if (newOtp[index]) {
        newOtp[index] = ''; // Clear the current value
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = ''; // Clear the previous value
        setOtp(newOtp);
        refs.current[index - 1]?.focus(); // Focus the previous input
      }
    }
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
    const clipboardData = e.clipboardData?.getData('text').slice(0, size) ?? '';
    const otpArray = clipboardData.split('').slice(0, size);
    setOtp(otpArray);

    // Automatically fill inputs based on paste data
    otpArray.forEach((digit, index) => {
      refs.current[index]?.setNativeProps({ text: digit });
    });

    if (otpArray.length === size) {
      handleVerifyOtp(otpArray);
    }
  };

  const handleVerifyOtp = (newOtp: string[]) => {
    setLoading(true);
    console.log('OTP Verified:', newOtp.join(''));
    setTimeout(() => {
      setLoading(false);
      router.push('/tabs/home');
    }, 1500);
  };

  return (
    <StyledScrollView className='bg-secondary relative flex flex-col'>
      <StyledView className='flex flex-col justify-between'>
        <StyledView className='h-96 justify-center flex flex-col gap-8 bg-primary rounded-br-[50px]'>
          <StyledView>
            <StyledText className='text-lg font-bold text-center text-dark'>
              Enter the code sent to
            </StyledText>
            <StyledText className='text-lg font-bold text-center text-dark'>
              +91 000000000
            </StyledText>
          </StyledView>

          <StyledView className='flex-row justify-around'>
            {Array.from({ length: size }).map((_, index) => (
              <StyledTextInput
                ref={(el) => (refs.current[index] = el as TextInput)}
                key={index}
                className='border border-dark bg-input p-3 w-14 h-14 text-lg text-center rounded-md text-dark'
                keyboardType='numeric'
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                maxLength={1}
                value={otp[index]}
                onPaste={(e) => handlePaste(e as any)} // Handle paste event
              />
            ))}
          </StyledView>

          <StyledTouchableOpacity
            className='self-center'
            onPress={() => console.log('Resend OTP')}
          >
            <StyledText className='text-center text-lg text-dark'>
              Didn’t receive the code?{' '}
              <StyledText className='underline text-dark'>Resend</StyledText>
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView className='mr-8 relative h-[450px]'>
        <StyledTouchableOpacity
          className='bg-dark p-4 ml-4 rounded-md w-full absolute bottom-0'
          onPress={() => handleVerifyOtp(otp)}
          disabled={!otp.every((digit) => digit !== '') || loading}
        >
          <StyledText className='text-center text-lg text-white font-bold'>
            {loading ? 'Verifying...' : 'Verify Me'}
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledScrollView>
  );
};

export default LoginScreen;
