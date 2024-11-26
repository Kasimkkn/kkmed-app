import React, { useEffect, useState } from 'react';
import Header from '@components/header';
import {
  StyledScrollView,
  StyledView,
} from '@components/shared/StyledComponents';
import { ROUTES } from 'core/utils/routes';
import productsData from 'data/medicine.json';
import { Href, Link } from 'expo-router';
import { Medicine } from 'types/productTypes';
import ProductCard from '@components/shared/ProductCard';

const CategoryDetailsPage = () => {
  const [products, setProducts] = useState<Medicine[]>([]);
  useEffect(() => {
    setProducts(productsData.data.medcine);
  });
  return (
    <StyledScrollView className='bg-secondary px-4 py-2'>
      <Header title='Medicine' backUrl={ROUTES.CUSTOMER.TABS.HOME} />
      <StyledView className='flex flex-row gap-2 flex-wrap items-center justify-center mt-4 mb-6'>
        {products.map((product, index) => (
          <Link
            href={
              `${ROUTES.CUSTOMER.PAGES.HOME.PRODUCT_DETAILS}${product.id}` as Href<string>
            }
            key={index}
          >
            <ProductCard
              imageUrl={product.medcine_image}
              name={product.medcine_name}
              // originalPrice={product.new_price}
              price={product.new_price}
              key={product.id}
            />
          </Link>
        ))}
      </StyledView>
    </StyledScrollView>
  );
};

export default CategoryDetailsPage;
