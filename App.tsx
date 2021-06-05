import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Jost_600SemiBold, Jost_400Regular } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';


import theme from './styles/theme';
import Routes from './src/routes';
import { IPlantProps } from './src/libs/storage';


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as IPlantProps;
        console.log('Notificações ->', data);
      }
    );

    return () => subscription.remove();
  }, [])

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="dark"/>
    </ThemeProvider>
  ); 
}

