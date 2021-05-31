import React from 'react';
import { SvgFromUri } from 'react-native-svg';

import { 
  Container,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  TipContainer,
  TipContainerImg,
  TipContainerText,
  AlertLabel, 
} from './styles';

import waterDrop from '../../assets/waterdrop.png';
import ButtonComponent from '../../components/ButtonComponent';
import { useRoute } from '@react-navigation/core';

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

interface Params {
  plant: PlantsProps;
}

const PlantSave: React.FC = () => {
  const route = useRoute();
  const { plant } = route.params as Params
  return (
  <Container>  
    <PlantInfo>
      <SvgFromUri 
        uri={plant.photo}
        height={150}
        width={150}
      />

      <PlantName>
        {plant.name}
      </PlantName>

      <PlantAbout>
        {plant.about}
      </PlantAbout>
    </PlantInfo>

    <Controller>
      <TipContainer>
        <TipContainerImg source={waterDrop}/>

        <TipContainerText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </TipContainerText>
      </TipContainer>

      <AlertLabel>
        Escolha horário a ser lembrado
      </AlertLabel>

      <ButtonComponent 
        title="Cadastrar Planta"
        onPress={() => {}}
      />
    </Controller>
  </Container>
  );
}

export default PlantSave;