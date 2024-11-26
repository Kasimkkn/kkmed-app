import React from 'react';
import {
  StyledImage,
  StyledText,
  StyledView,
  StyledPressable,
} from './StyledComponents';
import { Href, router } from 'expo-router';
import { ROUTES } from 'core/utils/routes';
interface CategoryProps {
  name: string;
  imageUrl: string;
  id?: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ name, imageUrl, id }) => {
  return (
    <StyledPressable
      onPress={() =>
        router.push(
          `${ROUTES.CUSTOMER.PAGES.HOME.CATEGORY_LISTING}${id}` as Href<string>
        )
      }
      className='m-2 bg-primary w-[29%] items-center p-2 rounded-lg'
    >
      <StyledView className='p-1 items-center'>
        <StyledImage
          source={{ uri: imageUrl }}
          className='h-12 w-12 object-cover'
        />
      </StyledView>
      <StyledText className='text-sm capitalize font-bold text-center px-2 pt-2'>
        {name}
      </StyledText>
    </StyledPressable>
  );
};

export default CategoryCard;
