import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to set an item in AsyncStorage
export const setAsyncStorageItem = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting item:', error);
  }
};

// Function to get an item from AsyncStorage
export const getAsyncStorageItem = async (key: string): Promise<any | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting item:', error);
    return null;
  }
};

// Function to remove an item from AsyncStorage
export const removeAsyncStorageItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item:', error);
  }
};

// Function to merge an item in AsyncStorage
export const mergeAsyncStorageItem = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error merging item:', error);
  }
};

// Function to clear all items in AsyncStorage
export const clearAllAsyncStorageItems = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

// Function to get all keys from AsyncStorage
export const getAsyncStorageAllKeys = async (): Promise<string[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    return [...keys]; // Create a mutable copy of the readonly array
  } catch (error) {
    console.error('Error getting all keys:', error);
    return [];
  }
};

// Function to get all items from AsyncStorage
export const getAllAsyncStorageItems = async (): Promise<
  Record<string, any>
> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    return items.reduce(
      (accumulator, [key, value]) => {
        if (value) {
          accumulator[key] = JSON.parse(value);
        }
        return accumulator;
      },
      {} as Record<string, any>
    );
  } catch (error) {
    console.error('Error getting all items:', error);
    return {};
  }
};
