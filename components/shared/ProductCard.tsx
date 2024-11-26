import React from 'react';
import {
  StyledImage,
  StyledTouchableOpacity,
  StyledText,
  StyledView,
} from './StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import { Href, useRouter } from 'expo-router';
import { ROUTES } from 'core/utils/routes';
interface ProductProps {
  name: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
  id: string;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  originalPrice,
  imageUrl,
  id,
}) => {
  let orginalName = name;
  if (orginalName.length > 20) {
    orginalName = orginalName.substring(0, 20) + '...';
  }
  const router = useRouter();
  return (
    <StyledTouchableOpacity
      onPress={() =>
        router.push(
          `${ROUTES.CUSTOMER.PAGES.HOME.PRODUCT_DETAILS}${id}` as Href<string>
        )
      }
      activeOpacity={1}
      className='mr-3 bg-primary w-[175px] h-60 rounded-lg'
    >
      <StyledImage
        source={{ uri: imageUrl }}
        className='h-36 w-full rounded-lg'
      />
      <StyledView className='flex flex-col pl-1 h-full '>
        <StyledText className='text-base font-bold px-2 my-1 pt-2'>
          {orginalName}
        </StyledText>
        <StyledView className='flex flex-row items-center pr-3 w-full justify-between'>
          <StyledView>
            <StyledText className='text-base font-medium px-2 line-through'>
              ₹{originalPrice}
            </StyledText>
            <StyledText className='text-xl font-bold px-2'>₹{price}</StyledText>
          </StyledView>
          <StyledTouchableOpacity className='bg-dark w-10 h-10 rounded-full flex items-center justify-center'>
            <Ionicons name='add-sharp' size={24} color='white' />
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledTouchableOpacity>
  );
};

export default ProductCard;
