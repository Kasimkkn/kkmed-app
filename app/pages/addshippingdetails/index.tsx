import { StyledScrollView, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

const AddShippingDetails = () => {

  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');

  return (
    <SafeAreaView >
      <StyledScrollView className="px-4 py-2 bg-white mt-4">
        {/* Header */}
        <StyledView className="flex-row items-center gap-2 mb-4">
          <Link href="/tabs/profile">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <StyledText className="text-xl font-bold">Adding Shipping Address</StyledText>
        </StyledView>

        {/* Full Name Input */}
        <StyledView className="mb-4">
          <StyledTextInput
            className="border border-gray-300 p-4 rounded-lg"
            placeholder="Full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </StyledView>

        {/* Address Input */}
        <StyledView className="mb-4">
          <StyledTextInput
            className="border border-gray-300 p-4 rounded-lg"
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
        </StyledView>

        {/* City Input */}
        <StyledView className="mb-4">
          <StyledTextInput
            className="border border-gray-300 p-4 rounded-lg"
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </StyledView>

        {/* State Input */}
        <StyledView className="mb-4">
          <StyledTextInput
            className="border border-gray-300 p-4 rounded-lg"
            placeholder="State/Province/Region"
            value={state}
            onChangeText={setState}
          />
        </StyledView>

        {/* Zip Code Input */}
        <StyledView className="mb-4">
          <StyledTextInput
            className="border border-gray-300 p-4 rounded-lg"
            placeholder="Zip Code (Postal Code)"
            value={zipCode}
            onChangeText={setZipCode}
          />
        </StyledView>

        {/* Country Input */}
        <StyledView className="mb-4">
          <StyledTextInput
            className="border border-gray-300 p-4 rounded-lg"
            placeholder="Country"
            value={country}
            onChangeText={setCountry}
          />
        </StyledView>

        {/* Save Address Button */}
        <StyledTouchableOpacity className="bg-secondary py-4 rounded-lg mt-6">
          <StyledText className="text-center text-white font-semibold">SAVE ADDRESS</StyledText>
        </StyledTouchableOpacity>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default AddShippingDetails;