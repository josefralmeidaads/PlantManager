import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyPlants from '../pages/MyPlants';
import PlantSelect from '../pages/PlantSelect';
import theme from '../../styles/theme';

const AppTab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.green,
        inactiveTintColor: theme.colors.heading,
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <AppTab.Screen 
        name="PlantSelect" 
        component={PlantSelect} 
        options={{
          tabBarLabel: 'Nova Planta',
          tabBarIcon: (({ size , color }) => (
            <MaterialIcons 
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ))
        }} 
      />

      <AppTab.Screen 
        name="MyPlants" 
        component={MyPlants}
        options={{
          tabBarLabel: 'Minhas Plantinhas',
          tabBarIcon: (({ size , color }) => (
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ))
        }} 
      />
    </AppTab.Navigator>
  );
}

export default AuthRoutes;