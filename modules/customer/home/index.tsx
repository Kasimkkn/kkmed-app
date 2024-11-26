import {
  StyledPressable,
  StyledScrollView,
  StyledText,
  StyledView,
} from '@components/shared/StyledComponents';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Href, Link } from 'expo-router';
import React from 'react';
import ProductCard from '@components/shared/ProductCard';
import ConcernCard from '@components/shared/ConcernCard';
import { concern, products } from 'data/homePageData';
import { ROUTES } from 'core/utils/routes';
import Button from '@components/button';
import SearchBar from '@components/searchBar/SearchBar';

export default function HomeScreen() {
  return (
    <StyledScrollView className='bg-secondary px-4 py-4'>
      <StyledView className='flex-row justify-between gap-2 items-center mb-4'>
        <StyledView className='relative flex-row bg-dark px-6 py-1 justify-end items-end rounded-full'>
          <StyledView className='absolute left-2 top-[6px]'>
            <Ionicons name='location-outline' size={22} color='white' />
          </StyledView>
          <StyledText className='relative left-2 text-lg font-bold text-light uppercase'>
            Ahmedabad
          </StyledText>
        </StyledView>

        <StyledView className='flex-row gap-1 items-center'>
          <Link
            href={ROUTES.CUSTOMER.PAGES.HOME.NOTIFICATION as Href<string>}
            className='p-2 bg-dark rounded-full'
          >
            <Ionicons name='notifications-outline' size={22} color='white' />
          </Link>
          <Link
            href={ROUTES.CUSTOMER.PAGES.HOME.CART as Href<string>}
            className='p-2 bg-dark rounded-full'
          >
            <Ionicons name='bag-handle-outline' size={22} color='white' />
          </Link>
        </StyledView>
      </StyledView>
      <SearchBar placeholder='Search Medicines & Healthcare Products' />

      <Button title='Order Via Prescription' onPress={() => {}} />

      <StyledView className='flex-row justify-between mt-2 mb-4'>
        <StyledPressable className='bg-input w-[48%] p-3 rounded-md flex items-center justify-center'>
          <StyledText className='text-dark text-lg font-bold'>
            Medicine
          </StyledText>
        </StyledPressable>
        <StyledPressable className='bg-input w-[48%] p-3 rounded-md flex items-center justify-center'>
          <StyledText className='text-lg font-bold text-dark'>
            Healthcare
          </StyledText>
        </StyledPressable>
      </StyledView>

      {/* Top Products section */}
      <StyledView className='flex-row justify-between items-center mb-3'>
        <StyledText className='text-lg font-bold text-dark'>
          Top Products
        </StyledText>
        <Link href={ROUTES.CUSTOMER.PAGES.HOME.PRODUCTS as Href<string>}>
          <StyledText className='text-base text-dark'>See All</StyledText>
        </Link>
      </StyledView>

      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mb-4'
      >
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </StyledScrollView>

      {/* Promotion Banner */}
      <StyledView className='w-full h-36 bg-dark flex-row items-center my-2 rounded-xl shadow-md border-white border'>
        <StyledView className='w-[142px] bg-input rounded-t-lg -rotate-90 h-[101%] flex justify-center items-center'>
          <StyledText className='text-4xl font-bold text-center'>
            30%
          </StyledText>
          <StyledText className='text-4xl font-bold text-center text-dark'>
            OFF
          </StyledText>
        </StyledView>
        <StyledText className='w-[60%] text-4xl font-semibold text-center text-white'>
          ON ORDERS OVER $250
        </StyledText>
      </StyledView>

      {/* Categories section */}
      <StyledView className='flex-row justify-between items-center mb-2'>
        <StyledText className='text-lg font-bold text-dark'>
          Category
        </StyledText>
        <Link href={ROUTES.CUSTOMER.PAGES.HOME.CATEGORY as Href<string>}>
          <StyledText className='text-base text-dark'>See All</StyledText>
        </Link>
      </StyledView>

      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='mb-24'
      >
        {concern.map((category, index) => (
          <ConcernCard key={index} {...category} />
        ))}
      </StyledScrollView>
    </StyledScrollView>
  );
}
