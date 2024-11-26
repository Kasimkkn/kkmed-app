import { styled } from 'nativewind';
import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '@components/button';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

export default function UploadPrescriptionScreen() {
  return (
    <StyledScrollView className='px-4 py-4 bg-secondary'>
      <Button
        title='Flat 20% Off on First Order'
        bgColor='bg-primary'
        textColor='text-dark'
        onPress={() => {}}
      />
      <StyledText className='text-lg font-semibold text-dark mb-2 mt-1'>
        Have a Prescription?
      </StyledText>
      <Button title='Upload Prescription' onPress={() => {}} />

      {/* Information Section */}
      <StyledView className='flex-row items-center my-2'>
        <Ionicons name='shield-checkmark-outline' size={24} color='black' />
        <StyledText className='ml-2 text-sm text-black'>
          Your Attached Prescription will be secure and Private.
        </StyledText>
      </StyledView>

      {/* Why Upload a Prescription Section */}
      <StyledView className='flex flex-col bg-primary rounded-xl mb-3 py-2 px-4'>
        <StyledText className='text-base font-semibold text-black mb-4'>
          Why Upload a Prescription?
        </StyledText>
        <StyledView className='space-y-4 mb-4'>
          <StyledView className='flex-row items-center'>
            <Ionicons name='document-text-outline' size={24} color='black' />
            <StyledText className='ml-2 text-sm text-black'>
              Never Lose the Digital Copy of your Prescription.
            </StyledText>
          </StyledView>
          <StyledView className='flex-row items-center'>
            <Ionicons name='medkit-outline' size={24} color='black' />
            <StyledText className='ml-2 text-sm text-black'>
              Tata labs specialist will help you.
            </StyledText>
          </StyledView>
          <StyledView className='flex-row items-center'>
            <Ionicons name='lock-closed-outline' size={24} color='black' />
            <StyledText className='ml-2 text-sm text-black'>
              Details from your Prescription are not shared with any third
              Party.
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>

      {/* Prescription Validation Link */}
      <StyledTouchableOpacity className='mb-4'>
        <StyledText className='text-dark underline text-sm'>
          What is a Valid Prescription?
        </StyledText>
      </StyledTouchableOpacity>
    </StyledScrollView>
  );
}
