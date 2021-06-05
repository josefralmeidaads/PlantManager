import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSave from '../pages/PlantSave';
import AuthRoutes from './tab.routes';

const Stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator 
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#FFFFFF"
        },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="UserIdentification" component={UserIdentification}/>
      <Stack.Screen name="Confirmation" component={Confirmation}/>
      <Stack.Screen name="PlantSelect" component={AuthRoutes}/>
      <Stack.Screen name="PlantSave" component={PlantSave}/>
      <Stack.Screen name="MyPlants" component={AuthRoutes}/>
    </Stack.Navigator>
  );
}

export default StackRoutes;