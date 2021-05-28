import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import ButtonComponent from '../../components/ButtonComponent';
import { 
  Container, 
  Wrapper,
  Form,
  Footer,
  Title,
  Emoji,
  Input, 
} from './styles';

const UserIdentification: React.FC = () => {
  const [name, setName] = useState<string>();
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const navigation = useNavigation();

  const handleInputBlur = () => {
    setIsFocus(false);
    setOnBlur(true);
  }

  const handleInputFocus = () => {
    setIsFocus(true);
    setOnBlur(false);
  }

  const handleInputFilled = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  }

  if(onBlur === true && !name){
    Alert.alert('Atenção', 'Precisamos saber qual é o seu nome!');
  }

  const handleNavigationConfirmation = () => {
    !name ? Alert.alert('Atenção', 'Precisamos saber qual é o seu nome!') 
    : navigation.navigate('Confirmation');
  }

  return (
    <Container>
      <Wrapper>
        <Form>
          <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
          <Title>Como podemos {'\n'} chamar você ?</Title>
          <Input
            value={name}
            onChangeText={(value) => handleInputFilled(value)} 
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            Focus={isFocus}
            Filled={isFilled}
          />

          <Footer>
            <ButtonComponent 
              activeOpacity={0.8}
              onPress={handleNavigationConfirmation}
            >
              Confirmar
            </ButtonComponent>
          </Footer>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default UserIdentification;