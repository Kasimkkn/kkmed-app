import React, { useState, useEffect } from 'react';
import {
  StyledScrollView,
  StyledText,
  StyledView,
  StyledImage,
  StyledPressable,
} from '@components/shared/StyledComponents';
import Header from '@components/header';
import { ROUTES } from 'core/utils/routes';
import productsData from 'data/medicine.json';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import Loader from '@components/loader/Loader';

interface ExpandedFAQs {
  [key: string]: boolean;
}

interface Product {
  id: string;
  medcine_name: string;
  medcine_image: string;
  brand_name: string;
  old_price: string;
  new_price: string;
  description_content: string;
  medicine_uses: {
    main_effects: string[];
    title: string;
    description: string;
  }[];
  medicine_side_effects: {
    title: string;
    description: string;
    main_effects: string[];
  }[];
  directions_of_use: string;
  frequently_asked_questions: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const ProductDetails = () => {
  const id = useLocalSearchParams().id as string;
  const productId = id.split('id')[1];
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [expandedFAQs, setExpandedFAQs] = useState<ExpandedFAQs>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    const fetchProductDetails = () => {
      try {
        const product = productsData.data.medcine.find(
          (product) => product.id === productId
        );
        setProductDetails(product || null);
      } catch (error) {
        console.log('Error fetching product details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const toggleFAQ = (id: string) => {
    setExpandedFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderAccordionSection = (
    sectionTitle: string,
    sectionData: any[],
    key: string
  ) => (
    <StyledView className='mb-2'>
      <StyledPressable
        className='flex flex-row justify-between items-center p-2 border border-dark rounded-lg'
        onPress={() => toggleAccordion(key)}
      >
        <StyledText className='font-bold text-lg text-dark'>
          {sectionTitle}
        </StyledText>
        <Ionicons
          name={activeAccordion === key ? 'chevron-up' : 'chevron-down'}
          size={24}
          color='black'
        />
      </StyledPressable>
      {activeAccordion === key && (
        <StyledView className='flex flex-col p-2'>
          {sectionData.map((item, index) => (
            <StyledView key={index} className='flex flex-col'>
              <StyledText className='text-base text-dark'>
                {item.description ? item.description : ''}
              </StyledText>
              {item.main_effects && item.main_effects.length > 0 && (
                <StyledView className='mt-1'>
                  {item.main_effects.map(
                    (effect: string, effectIndex: number) => (
                      <StyledText
                        key={effectIndex}
                        className='text-base text-gray-800 mb-1'
                      >
                        {effectIndex + 1}. {effect}
                      </StyledText>
                    )
                  )}
                </StyledView>
              )}
            </StyledView>
          ))}
        </StyledView>
      )}
    </StyledView>
  );

  if (isLoading) {
    return (
      <StyledView className='flex-1 justify-center items-center bg-gray-100'>
        <Loader />
      </StyledView>
    );
  }

  if (!productDetails) {
    return (
      <StyledView className='flex-1 justify-center items-center bg-gray-100'>
        <StyledText className='text-lg text-gray-500'>
          No product data found
        </StyledText>
      </StyledView>
    );
  }

  return (
    <StyledScrollView className='bg-secondary py-2'>
      <Header
        title={
          productDetails.medcine_name.length > 30
            ? productDetails.medcine_name.substring(0, 30) + '...'
            : productDetails.medcine_name
        }
        backUrl={ROUTES.CUSTOMER.TABS.HOME}
      />

      <StyledView className='px-2 py-4 bg-white rounded-b-3xl h-80 mt-2'>
        <StyledImage
          src={productDetails.medcine_image}
          alt='Product'
          className='w-full h-full rounded-b-3xl'
        />
      </StyledView>

      <StyledView className='px-3'>
        <StyledText className='text-xl font-semibold mt-4'>
          {productDetails.medcine_name}
        </StyledText>
        <StyledText className='text-base text-black'>
          {productDetails.brand_name}
        </StyledText>

        <StyledView className='flex flex-row justify-between items-end'>
          <StyledView className='flex flex-row gap-2 items-end'>
            <StyledView className='flex flex-col'>
              <StyledText className='my-1 text-gray-600 text-base line-through'>
                MRP ₹{productDetails.old_price}
              </StyledText>
              <StyledView className='flex flex-row items-center w-full justify-between'>
                <StyledText className='text-xl font-bold text-dark'>
                  ₹{parseFloat(productDetails.new_price).toFixed(2)}
                </StyledText>
                <StyledPressable
                  className='rounded-lg px-4 py-1 bg-dark'
                  onPress={() => {}}
                >
                  <StyledText className='text-center text-lg font-bold text-light capitalize'>
                    Buy Now
                  </StyledText>
                </StyledPressable>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>

      <StyledView className='p-3 mb-6'>
        {/* Medical Description Accordion */}
        <StyledView className='mb-2'>
          <StyledPressable
            className='flex flex-row justify-between items-center p-2 border border-dark rounded-lg'
            onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          >
            <StyledText className='font-bold text-lg text-dark'>
              Medical Description
            </StyledText>
            <Ionicons
              name={isDescriptionExpanded ? 'chevron-up' : 'chevron-down'}
              size={24}
              color='black'
            />
          </StyledPressable>
          {isDescriptionExpanded && (
            <StyledView className='flex flex-col p-2'>
              <StyledText className='text-base text-gray-900'>
                {expandedDescription ||
                productDetails.description_content.length <= 120
                  ? productDetails.description_content
                  : `${productDetails.description_content.substring(0, 120)}...`}
              </StyledText>

              {productDetails.description_content.length > 120 && (
                <StyledPressable
                  onPress={() => setExpandedDescription(!expandedDescription)}
                  className='mt-1 flex items-center'
                >
                  <StyledText className='text-dark font-bold text-center'>
                    {expandedDescription ? 'Read Less' : 'Read More'}
                  </StyledText>
                </StyledPressable>
              )}
            </StyledView>
          )}
        </StyledView>

        {/* Other Sections */}
        {renderAccordionSection('Uses', productDetails.medicine_uses, 'uses')}
        {renderAccordionSection(
          'Side Effects',
          productDetails.medicine_side_effects,
          'sideEffects'
        )}
        {renderAccordionSection(
          'Direction For Use',
          [{ description: productDetails.directions_of_use }],
          'directions_of_use'
        )}

        <StyledView className='border border-dark rounded-lg'>
          <StyledPressable
            className='flex flex-row justify-between items-center p-2'
            onPress={() => toggleAccordion('faqs')}
          >
            <StyledText className='font-bold text-lg text-dark'>
              Frequently Asked Questions (FAQs)
            </StyledText>
            <Ionicons
              name={activeAccordion === 'faqs' ? 'chevron-up' : 'chevron-down'}
              size={24}
              color={'black'}
            />
          </StyledPressable>
          {activeAccordion === 'faqs' && (
            <StyledView className=''>
              {productDetails.frequently_asked_questions.map((faq) => (
                <StyledPressable
                  key={faq.id}
                  onPress={() => toggleFAQ(faq.id)}
                  className='bg-primary border-t border-dark rounded-lg'
                >
                  <StyledView className='flex flex-row justify-between items-center p-2'>
                    <StyledText className='text-base text-dark'>
                      {faq.question}
                    </StyledText>
                  </StyledView>
                  {expandedFAQs[faq.id] && (
                    <StyledText className='text-base text-dark p-2'>
                      {faq.answer}
                    </StyledText>
                  )}
                </StyledPressable>
              ))}
            </StyledView>
          )}
        </StyledView>
      </StyledView>
    </StyledScrollView>
  );
};

export default ProductDetails;
