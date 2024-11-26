import { StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

const ShippingDetails = () => {
  const router = useRouter();

  const onLinkPress = () => {
    router.push('/pages/addshippingdetails');
  }

  const [selectedAddress, setSelectedAddress] = useState(1); // State to manage selected shipping address

  const addresses = [
    { id: 1, name: 'Jane Doe', address: '3 Newbridge Court', city: 'Chino Hills, CA 91709, United States' },
    { id: 2, name: 'John Doe', address: '3 Newbridge Court', city: 'Chino Hills, CA 91709, United States' },
    { id: 3, name: 'John Doe', address: '51 Riverside', city: 'Chino Hills, CA 91709, United States' },
  ];

  return (
    <SafeAreaView>
      <StyledScrollView className="bg-white px-4 py-2 mt-4 ">
        {/* Header */}
        <StyledView className="flex-row items-center gap-2 mb-4">
          <Link href="/tabs/profile">
            <Ionicons name="arrow-back" size={24} color="black" />
          </Link>
          <StyledText className="text-xl font-bold">Shipping Addresses</StyledText>
        </StyledView>

        {/* Shipping Address Cards */}
        {addresses.map((item) => (
          <StyledView key={item.id} className="p-4 mb-3 rounded-lg border border-gray-300 shadow-sm">
            <StyledView className="flex-row justify-between items-center">
              <StyledText className="font-semibold text-lg">{item.name}</StyledText>
              <StyledTouchableOpacity>
                <StyledText className="text-red-500">Edit</StyledText>
              </StyledTouchableOpacity>
            </StyledView>
            <StyledText className="text-sm text-gray-600">{item.address}</StyledText>
            <StyledText className="text-sm text-gray-600 mb-2">{item.city}</StyledText>
            <StyledTouchableOpacity
              className="flex-row items-center"
              onPress={() => setSelectedAddress(item.id)}
            >
              <Ionicons
                name={selectedAddress === item.id ? 'checkbox' : 'square-outline'}
                size={24}
                color={selectedAddress === item.id ? 'black' : 'gray'}
              />
              <StyledText className="ml-2">Use as the shipping address</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        ))}

        {/* Add new address button */}
        <StyledTouchableOpacity onPress={onLinkPress} className="absolute right-4 bottom-0 bg-black p-2 rounded-full shadow-lg">
          <Ionicons name="add" size={25} color="white" />
        </StyledTouchableOpacity>
      </StyledScrollView>
    </SafeAreaView>
  );
};

export default ShippingDetails;