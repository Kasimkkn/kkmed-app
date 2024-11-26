import Header from '@components/header';
import CategoryCard from '@components/shared/CategoryCard';
import {
  StyledScrollView,
  StyledView,
} from '@components/shared/StyledComponents';
import { ROUTES } from 'core/utils/routes';
import { category } from 'data/homePageData';
import React from 'react';

const CategoryPage = () => {
  return (
    <StyledScrollView className='bg-secondary px-4 py-2 '>
      <Header title='Categories' backUrl={ROUTES.CUSTOMER.TABS.HOME}></Header>
      <StyledView className='flex flex-row gap-2 flex-wrap items-center mt-4'>
        {category.map((item, index) => (
          <CategoryCard
            name={item.name}
            imageUrl={item.imageUrl}
            id={item.id}
            key={index}
          />
        ))}
      </StyledView>
    </StyledScrollView>
  );
};

export default CategoryPage;
