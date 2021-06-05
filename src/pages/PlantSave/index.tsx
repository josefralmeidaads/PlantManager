import React, { useState } from 'react';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { SvgFromUri } from 'react-native-svg';
import { Alert, Platform } from 'react-native';
import { format, isBefore } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/core';

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
  DateTimePickerButton,
  DateTimePickerText, 
} from './styles';

import waterDrop from '../../assets/waterdrop.png';
import ButtonComponent from '../../components/ButtonComponent';
import { IPlantProps, loadPlant, savePlant } from '../../libs/storage';
import { ParamsConfirmation } from '../Confirmation';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Params {
  plant: IPlantProps;
}

const PlantSave: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const { plant } = route.params as Params

  const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
    if(Platform.OS === 'android'){
      setShowDatePicker(oldState => !oldState)
    }

    if(dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma horário superior ao atual! ⏰');
    }

    dateTime && setSelectedDateTime(dateTime);
  }

  const handleOpenDateTimePickerForAndroid = () => {
    setShowDatePicker(oldState => !oldState)
  }

  const handleSavePlantStorage = async(plant:IPlantProps) => {
    try{
      await savePlant({...plant, dateTimeNotification: selectedDateTime});
      navigation.navigate('Confirmation', {
        title: 'Protinho',
        subtitle: 'Sua planta está salva',
        buttonTitle: 'Confirmar',
        icon: 'hug',
        nextScreen: 'PlantSelect'
      } as ParamsConfirmation);
    }catch {
      Alert.alert('Falha na operação 😥');
    }
  }

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
          {plant.water_tips}
        </TipContainerText>
      </TipContainer>

      <AlertLabel>
        Escolha horário a ser lembrado
      </AlertLabel>

      {showDatePicker && <DateTimePicker 
        value={selectedDateTime}
        mode="time"
        display="spinner"
        is24Hour={true}
        onChange={handleChangeTime}
      />}

      {
        Platform.OS === 'android' && (
          <DateTimePickerButton 
            onPress={handleOpenDateTimePickerForAndroid}
            activeOpacity={0.8}
          >
            <DateTimePickerText>
              {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
            </DateTimePickerText>
          </DateTimePickerButton>
        )
      }

      <ButtonComponent 
        title="Cadastrar Planta"
        onPress={() => handleSavePlantStorage(plant)}
        activeOpacity={0.8}
      />
    </Controller>
  </Container>
  );
}

export default PlantSave;