import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getIconName } from 'core/helper/helper';
import React from 'react';
import HomeScreen from '../../app/tabs/home';
import OrderScreen from '../../app/tabs/order';
import ProfileScreen from '../../app/tabs/profile';
import UploadPrescriptionScreen from '../../app/tabs/upload';
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color }) => {
        const iconName = getIconName(route.name, focused);
        return <Ionicons name={iconName as any} size={30} color={color} />;
      },
      tabBarActiveTintColor: '#D2E0D4',
      tabBarInactiveTintColor: '#8BB788',
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarStyle: {
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#142917',
        height: 65,
        position: 'absolute',
        bottom: 5,
        paddingVertical: 10,
        paddingBottom: 5,
      },
    })}
  >
    <Tab.Screen name='Home' component={HomeScreen} />
    <Tab.Screen name='Upload' component={UploadPrescriptionScreen} />
    <Tab.Screen name='Order' component={OrderScreen} />
    <Tab.Screen name='Profile' component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
