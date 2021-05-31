import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import Load from '../../components/Load';
import EnviromentButton from '../../components/EnviromentButton';
import Header from '../../components/Header';
import PlantCardPrimary from '../../components/PlantCardPrimary';
import api from '../../services/api';
import { 
  Container,
  HeaderContent,
  Title,
  SubTitle,
  ListButton,
  ListPlants, 
} from './styles';

interface PlantEnvironments {
  key: string;
  title: string;
}

interface PlantsProps {
  id: number,
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: 2,
    repeat_every: string
  }
}

const PlantSelect: React.FC = () => {
  const [plants_environments, setPlants_environments] = useState<PlantEnvironments[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [environmentsSelected, setEnvironmentsSelected] = useState('all');
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [loadedAll, setLoadedAll] = useState<boolean>(false);

  const handleEnvironmentSelect = (environment: string) => {
    setEnvironmentsSelected(environment);

    if(environment === 'all'){
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) => {
      return plant.environments.includes(environment)
    });

    setFilteredPlants(filtered);
  }

  const loadPlants = async() => {
    const { data } = await api.get(`/plants?_sort=name&order=asc&_page=${page}&_limit=6`);
    
    if(!data){
      return setLoadedAll(true);
    }

    if(page > 1){
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      filteredPlants.length <= 0 && setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false)
  }

  const handleLoadMore = async(distance: number) => {
    if(distance < 1){
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1)
    loadPlants();
  }
  
  useEffect(() => {
    const loadPlants_environments = async() => {
      const response = await api.get(`/plants_environments?_sort=title&order=asc`);
      setPlants_environments([{ key: 'all', title: 'Todos' }, ...response.data]);
    }

    loadPlants_environments();
  }, []);

  useEffect(() => {
    loadPlants();
  }, [])

  if(loading){
    return <Load />
  }

  return (
    <Container>
      <Header />

      <HeaderContent>
        <Title>Em qual ambiente</Title>
        <SubTitle>
          você quer colocar sua planta?
        </SubTitle>
      </HeaderContent>

      <ListButton>
        <FlatList 
          data={plants_environments}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item: plants_environments }) => (
            <EnviromentButton 
              title={plants_environments.title}
              isActive={plants_environments.key === environmentsSelected}
              onPress={() => handleEnvironmentSelect(plants_environments.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ListButton>

      <ListPlants>
        <FlatList 
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: plant }) => (
            <PlantCardPrimary 
              data={plant}
              style={styles.ListPlants}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleLoadMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? 
            <ActivityIndicator 
              color="#2B7A4B"
            />
            : <></>
          }
        />
      </ListPlants>
    </Container>
  );
}

export default PlantSelect;

const styles = StyleSheet.create({
  ListPlants: {
    justifyContent: 'center',
  }
});