import {
  StyledTextInput,
  StyledView,
} from '@components/shared/StyledComponents';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface Props {
  placeholder: string;
  className?: string;
  // onChange?: (value: string) => void;
  value?: string;
}
const SearchBar = ({ placeholder, className, value }: Props) => {
  return (
    <StyledView className='relative flex-row w-full rounded-lg p-3 bg-input items-center mb-2'>
      <StyledView className=''>
        <Ionicons name='search-outline' size={24} color={'#8BB788'} />
      </StyledView>
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        // onChange={onChange}
        className={`text-gray-700 text-lg pl-1 ${className}`}
      />
    </StyledView>
  );
};

export default SearchBar;
