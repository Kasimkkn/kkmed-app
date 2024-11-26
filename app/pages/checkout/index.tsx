import Button from '@components/button';
import Header from '@components/header';
import {
  StyledScrollView,
  StyledText,
  StyledTextInput,
  StyledView,
} from '@components/shared/StyledComponents';
import { ROUTES } from 'core/utils/routes';
import { router } from 'expo-router';
import React, { useState } from 'react';

const Checkout = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [address, setAddress] = useState({
    name: 'kasim kadiwala',
    street: 'kadiwala compound',
    city: 'rasulpur',
    country: 'gujarat',
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const renderEditField = (label: string, value: string, onChange: any) => (
    <StyledTextInput
      className='border-b border-dark text-base text-dark font-medium py-1 mb-2'
      value={value}
      onChangeText={onChange}
      placeholder={label}
    />
  );

  return (
    <StyledScrollView className='bg-secondary px-3'>
      {/* Header */}
      <Header title='Checkout' backUrl={ROUTES.CUSTOMER.PAGES.HOME.CART} />

      <StyledText className='text-lg font-bold mt-3 pl-2'>
        Shipping Address
      </StyledText>

      <StyledView className='flex-row relative bg-primary p-4 mt-4 rounded-lg mb-4'>
        <StyledView>
          {isEditing ? (
            <>
              {renderEditField('Name', address.name, (text: any) =>
                setAddress({ ...address, name: text })
              )}
              {renderEditField('Street', address.street, (text: any) =>
                setAddress({ ...address, street: text })
              )}
              {renderEditField('City', address.city, (text: any) =>
                setAddress({ ...address, city: text })
              )}
              {renderEditField('Country', address.country, (text: any) =>
                setAddress({ ...address, country: text })
              )}
            </>
          ) : (
            <>
              <StyledText className='text-base text-dark font-medium'>
                {address.name}
              </StyledText>
              <StyledText className='text-base text-dark font-medium'>
                {address.street}
              </StyledText>
              <StyledText className='text-base text-dark font-medium'>
                {address.city}
              </StyledText>
              <StyledText className='text-base text-dark font-medium'>
                {address.country}
              </StyledText>
            </>
          )}
        </StyledView>
        <StyledView className='absolute right-2 top-2'>
          <StyledText
            className='text-dark font-bold texxt-base capitalize'
            onPress={toggleEdit}
          >
            {isEditing ? 'save' : 'change'}
          </StyledText>
        </StyledView>
      </StyledView>

      <StyledView className='bg-primary p-4 mt-5 rounded-lg shadow-md mb-4 drop-shadow-2xl'>
        {/* Order Row */}
        <StyledView className='flex-row justify-between'>
          <StyledText className='text-gray-700 text-base font-semibold'>
            Order:
          </StyledText>
          <StyledText className='font-bold'>$500</StyledText>
        </StyledView>

        {/* Delivery Row */}
        <StyledView className='flex-row justify-between mt-2'>
          <StyledText className='text-gray-700 text-base font-semibold'>
            Delivery:
          </StyledText>
          <StyledText className='font-bold'>$50</StyledText>
        </StyledView>

        {/* Summary Row */}
        <StyledView className='flex-row justify-between mt-2'>
          <StyledText className='text-gray-700 text-base font-semibold'>
            Summary:
          </StyledText>
          <StyledText className='font-bold'>$550</StyledText>
        </StyledView>
      </StyledView>

      {/* submit Button */}
      <Button
        title='Submit'
        onPress={() => router.push(`${ROUTES.CUSTOMER.TABS.HOME}` as any)}
      />
    </StyledScrollView>
  );
};

export default Checkout;
