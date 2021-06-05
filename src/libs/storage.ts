import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { format } from 'date-fns';
import { Alert } from 'react-native';

export interface IPlantProps {
  id: number,
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: 2,
    repeat_every: string
  };
  dateTimeNotification: Date;
  hour:string;
}

export interface StoragePlantProps {
  [id: string]: {
    data: IPlantProps;
    notificationId: string;
  }
}

export const savePlant = async(plant: IPlantProps): Promise<void> => {
  try{
    const nexTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;
    if( repeat_every === 'week'){
      const interval = Math.trunc(7 / times);
      nexTime.setDate(now.getDate() + interval);
    } else {
      nexTime.setDate(nexTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nexTime.getTime()) / 1000)
    );

    console.log('seconds ->', seconds);

    const notificadionId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heyyy',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {
          plant
        },
      },
      trigger: {
        repeats: true,
        seconds: seconds < 60 ? 60 : seconds,
      }
    })

    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps): {};
    
    const newPlant = {
      [plant.id]: {
        data: plant,
        notificadionId
      }
    }

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify({...oldPlants, ...newPlant}));
  }catch(err){
    Alert.alert('Erro!', err.message);
  }
}

export const loadPlant = async(): Promise<IPlantProps[]> => {
  try{
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps): {};

    const plantsSorted = Object
    .keys(plants)
    .map((plant) => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
      }
    })
    .sort((a, b) => 
      Math.floor(
        new Date(a.dateTimeNotification).getTime() / 1000 -
        Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    )

    return plantsSorted;
  }catch(err){
    Alert.alert('Erro!', err.message);
  }
}

export const RemovePlantStoraged = async(plant: IPlantProps): Promise<void> => {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? JSON.parse(data) as StoragePlantProps : {};

    await Notifications.cancelScheduledNotificationAsync(plants[plant.id].notificationId);

    delete plants[plant.id];

    await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants));
  }catch {
    Alert.alert('Error!', 'Falha interna na operação 😥')
  }
}