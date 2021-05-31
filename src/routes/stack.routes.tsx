import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import PlantSelect from '../pages/PlantSelect';
import PlantSave from '../pages/PlantSave';

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
      <Stack.Screen name="PlantSelect" component={PlantSelect}/>
      <Stack.Screen name="PlantSave" component={PlantSave}/>
    </Stack.Navigator>
  );
}

export default StackRoutes;