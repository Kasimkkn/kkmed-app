import Button from '@components/button';
import Header from '@components/header';
import { StyledImage } from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ROUTES } from 'core/utils/routes';
import { cartItems } from 'data/cartdata';
import { router } from 'expo-router';
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

const Cart = () => {
  const [viewMore, setViewMore] = useState(false);
  const itemsToDisplay = viewMore ? cartItems : cartItems.slice(0, 4);

  return (
    <StyledScrollView className='px-4 py-2 bg-secondary'>
      <Header
        className='cart_header'
        title={`Your Cart (${cartItems.length})`}
        backUrl={ROUTES.CUSTOMER.TABS.HOME}
      />
      <StyledView className='mt-2'>
        <StyledScrollView
          className={`${viewMore ? 'h-[26rem]' : 'h-auto'}`}
          scrollEnabled={viewMore}
        >
          {itemsToDisplay?.map((item) => {
            return (
              <StyledView
                key={item.id}
                className='flex-row items-center justify-between bg-primary rounded-xl my-1 py-4 px-3 shadow-md shadow-gray-500'
              >
                <StyledView className='product_image w-20 h-20 bg-primary rounded-md'>
                  <StyledImage source={item.image} className='w-full h-full' />
                </StyledView>

                <StyledView className='product_info'>
                  <StyledText className='font-semibold text-base text-dark mb-1'>
                    {item.name}
                  </StyledText>
                  <StyledText className='text-gray-700 text-xs'>
                    {item.description}
                  </StyledText>
                  <StyledText className='font-bold text-lg text-dark mt-2'>
                    Rs.{item.price}
                  </StyledText>
                </StyledView>

                <StyledView className='flex justify-between'>
                  <StyledTouchableOpacity className='self-end mb-2'>
                    <Ionicons
                      name='close-circle-outline'
                      size={24}
                      color='dark'
                    />
                  </StyledTouchableOpacity>
                  <StyledView className='flex-row justify-center items-center mt-4'>
                    <StyledTouchableOpacity className='bg-secondary rounded-lg p-1 '>
                      <Ionicons name='remove' size={18} color='dark' />
                    </StyledTouchableOpacity>
                    <StyledText className='mx-3 text-lg font-semibold'>
                      {item.quantity}
                    </StyledText>
                    <StyledTouchableOpacity className='bg-dark rounded-lg p-1'>
                      <Ionicons name='add' size={18} color='white' />
                    </StyledTouchableOpacity>
                  </StyledView>
                </StyledView>
              </StyledView>
            );
          })}
        </StyledScrollView>

        {cartItems.length > 4 && (
          <StyledView className='flex-row justify-end py-2'>
            {!viewMore ? (
              <StyledTouchableOpacity onPress={() => setViewMore(true)}>
                <StyledText className='pr-2 text-dark font-semibold'>
                  View More
                </StyledText>
              </StyledTouchableOpacity>
            ) : (
              <StyledTouchableOpacity onPress={() => setViewMore(false)}>
                <StyledText className='pr-2 text-dark font-semibold'>
                  View Less
                </StyledText>
              </StyledTouchableOpacity>
            )}
          </StyledView>
        )}
      </StyledView>
      {/* Payment Summary */}
      <StyledView className=' bg-primary rounded-2xl py-4'>
        <StyledText className='font-bold text-dark text-lg mb-2 px-4'>
          Payment Summary
        </StyledText>

        <StyledView className='px-4'>
          <StyledView className='flex-row justify-between'>
            <StyledText className='text-dark font-normal text-base'>
              Order Total
            </StyledText>
            <StyledText className='text-dark'>Rs. 228.80</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mt-2'>
            <StyledText className='text-dark font-normal text-base'>
              Items Discount
            </StyledText>
            <StyledText className='text-dark'>- 28.80</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mt-2'>
            <StyledText className='text-dark font-normal text-base'>
              Coupon Discount
            </StyledText>
            <StyledText className='text-dark'>- 15.80</StyledText>
          </StyledView>
          <StyledView className='flex-row justify-between mt-2'>
            <StyledText className='text-dark font-normal text-base'>
              Shipping
            </StyledText>
            <StyledText className='text-dark'>Free</StyledText>
          </StyledView>
        </StyledView>

        <StyledView className='flex-row justify-between mt-4 px-4'>
          <StyledText className='font-bold text-dark'>Total</StyledText>
          <StyledText className='font-bold text-dark'>Rs. 185.00</StyledText>
        </StyledView>
      </StyledView>
      <Button
        title='Place Order'
        onPress={() =>
          router.push(`${ROUTES.CUSTOMER.PAGES.HOME.CHECKOUT}` as any)
        }
      />
    </StyledScrollView>
  );
};

export default Cart;
