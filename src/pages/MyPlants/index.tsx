import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import waterdrop from '../../assets/waterdrop.png';
import Header from '../../components/Header';
import Load from '../../components/Load';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import { IPlantProps, loadPlant, RemovePlantStoraged, StoragePlantProps } from '../../libs/storage';
import { 
  Container,
  SpotLight,
  WaterDropImg,
  SpotLightText,
  Plants,
  PlantsTitle, 
} from './styles';

const MyPlants: React.FC = () => {
  const [plants, setPlants] = useState<IPlantProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextWaterdPlant, setNextWaterdPlant] = useState<string>();
  const [nextWaterdPlantTime, setNextWaterdPlantTime] = useState<string>();

  const handleRemove = (plant: IPlantProps) => {
    Alert.alert('Remover', `Deseja remover a ${plant.name} ?`, [
      {
        text: 'Não 🤔',
        style: 'cancel',
      },
      {
        text: 'Sim 👍',
        style: 'default',
        onPress: () => {RemovePlant(plant)},
      }
    ])
  }

  const RemovePlant = async(plant: IPlantProps): Promise<void> => {
    try {
      await RemovePlantStoraged(plant);

      setPlants((oldData) => {
        return oldData.filter((item) => item.id !== plant.id)
      });
    }catch {
      Alert.alert('Error!', 'Não foi possível deletar 😥');
    }
  }

  useEffect(() => {
    const loadStorageData = async() => {
      const plantsStoraged = await loadPlant();
      
      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification)
        .getTime(),
        new Date().getTime(),
        { locale: pt }
      )

      setNextWaterdPlant(plantsStoraged[0].name);
      setNextWaterdPlantTime(nextTime);
      setPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, [plants]);

  if(loading){
    <Load />
  }

  return ( 
    <Container>
      <Header />

      <SpotLight>
        <WaterDropImg 
          source={waterdrop}
        />

        <SpotLightText>
          Não esqueça de regar a {nextWaterdPlant} à
          {'\n'}
          {nextWaterdPlantTime}
        </SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsTitle>
          Próximo regadas
        </PlantsTitle>

        <FlatList 
          data={plants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: plant }) => (
            <PlantCardSecondary 
              data={plant}
              handleRemove={() => handleRemove(plant)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        
      </Plants>
    </Container>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    
  }
});

export default MyPlants;