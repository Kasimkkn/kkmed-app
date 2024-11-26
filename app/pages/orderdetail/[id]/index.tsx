import { styled } from 'nativewind';
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Animated,
  Easing,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Link, useLocalSearchParams } from 'expo-router';
import DeliveryInformation from '@components/DeliveryInformation';
import { ROUTES } from 'core/utils/routes';
import Button from '@components/button';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);
const StyledImage = styled(Image);

export default function OrderScreen() {
  const [openDeliveryInformation, setOpenDeliveryInformation] = useState(false);
  const [slideAnim] = useState(new Animated.Value(300)); // Initial position of the modal
  const orderDetailId = useLocalSearchParams().id;

  const toggleDeliveryInformation = () => {
    if (!openDeliveryInformation) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
    setOpenDeliveryInformation(!openDeliveryInformation);
  };

  const closeDeliveryInformation = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setOpenDeliveryInformation(false);
    });
  };

  return (
    <StyledScrollView className='bg-gray-100 px-4 py-2 relative'>
      {/* Header */}
      <StyledView className='flex-row items-center justify-between mb-4'>
        <Link href={ROUTES.CUSTOMER.TABS.ORDERS as any}>
          <Ionicons name='arrow-back' size={24} color='black' />
        </Link>
        <StyledText className='text-xl font-bold text-black'>
          Order Details {orderDetailId}
        </StyledText>
        <Ionicons name='ellipsis-vertical' size={24} color='black' />
      </StyledView>

      <StyledView className='flex flex-col bg-white rounded-xl my-1 py-4 px-3 shadow-md'>
        {/* Customer Info */}
        <StyledView className='mb-4'>
          <StyledText className='text-base font-bold text-black capitalize'>
            Kasim Kadiwala
          </StyledText>
          <StyledText className='text-sm text-gray-500 capitalize'>
            Sidhpur, Rasulpur - 384290
          </StyledText>
        </StyledView>

        {/* Delivery Info */}
        <StyledView className='flex-row items-center justify-between gap-2 mb-1'>
          <StyledView className='flex-row items-center gap-1'>
            <Ionicons name='checkmark-circle-outline' size={24} color='green' />
            <StyledText className='text-sm text-gray-500'>
              Delivered on 29.06.2022, 5:30 PM
            </StyledText>
          </StyledView>
          <StyledTouchableOpacity onPress={toggleDeliveryInformation}>
            <Ionicons name='chevron-forward-outline' size={24} color='gray' />
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>

      {/* Items in Order */}
      <StyledText className='text-lg font-bold pl-2 text-black my-2'>
        Items in order
      </StyledText>

      {/* Order Items */}
      <StyledView className='space-y-2 p-2 '>
        {/* Item 1 */}
        <StyledView className='flex-row items-center justify-between bg-white rounded-xl py-6 px-3 shadow-md shadow-gray-500'>
          <StyledImage
            source={require('@assets/images/image3.png')}
            className='w-16 h-16 rounded-md'
          />
          <StyledView className='flex-1 ml-4'>
            <StyledText className='font-bold text-black'>
              Paracetamol-Ratiopharm 500mg Tabletten 20 ST
            </StyledText>
            <StyledText className='text-sm text-gray-500'>
              150ml | 1.95 ₹ x5
            </StyledText>
          </StyledView>
          <StyledText className='text-base font-bold text-black'>
            ₹9.75
          </StyledText>
        </StyledView>

        {/* Item 2 */}
        <StyledView className='flex-row items-center justify-between bg-white rounded-xl py-6 px-3 shadow-md shadow-gray-500'>
          <StyledImage
            source={require('@assets/images/image3.png')}
            className='w-16 h-16 rounded-md'
          />
          <StyledView className='flex-1 ml-4'>
            <StyledText className='font-bold text-black'>
              Aesop Resurrection
            </StyledText>
            <StyledText className='text-sm text-gray-500'>
              500ml soap | 31.00 ₹ x1
            </StyledText>
          </StyledView>
          <StyledText className='text-base font-bold text-black'>
            ₹31.00
          </StyledText>
        </StyledView>

        {/* Item 3 */}
        <StyledView className='flex-row items-center justify-between bg-white rounded-xl py-6 px-3 shadow-md shadow-gray-500'>
          <StyledImage
            source={require('@assets/images/image3.png')}
            className='w-16 h-16 rounded-md'
          />
          <StyledView className='flex-1 ml-4'>
            <StyledText className='font-bold text-black'>
              Aesop Resurrection
            </StyledText>
            <StyledText className='text-sm text-gray-500'>
              500ml soap | 31.00 ₹ x1
            </StyledText>
          </StyledView>
          <StyledText className='text-base font-bold text-black'>
            ₹31.00
          </StyledText>
        </StyledView>
      </StyledView>

      <StyledView className='bg-white mt-5 rounded-xl py-2 px-3 shadow-md'>
        {/* Order Summary */}
        <StyledView className='flex-row justify-between mb-3'>
          <StyledText className='text-base font-bold text-black'>
            Order Total
          </StyledText>
          <StyledText className='text-base font-bold text-black'>
            ₹53.70
          </StyledText>
        </StyledView>

        {/* Order Details */}
        <StyledView className='space-y-4 mb-2'>
          <StyledView className='flex-row justify-between'>
            <StyledText className='text-base font-bold text-black'>
              Order ID
            </StyledText>
            <StyledText className='text-base font-bold text-black'>
              VSLR-298A
            </StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between'>
            <StyledText className='text-base font-bold text-black'>
              Order Time
            </StyledText>
            <StyledText className='text-base font-bold text-black'>
              29.06.2022, 14:13
            </StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between'>
            <StyledText className='text-base font-bold text-black'>
              Ship Time
            </StyledText>
            <StyledText className='text-base font-bold text-black'>
              29.06.2022, 14:47
            </StyledText>
          </StyledView>
        </StyledView>
        <Button
          title='Buy Again'
          onPress={() => router.push('/pages/checkout')}
        />
      </StyledView>

      <Modal
        visible={openDeliveryInformation}
        animationType='slide'
        transparent={true}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Animated.View
            style={{
              height: '50.3%',
              backgroundColor: 'transparent',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}
          >
            <DeliveryInformation onClose={closeDeliveryInformation} />
          </Animated.View>
        </View>
      </Modal>
    </StyledScrollView>
  );
}
