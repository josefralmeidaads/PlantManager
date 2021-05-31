import { CommonActions, useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import ButtonComponent from '../../components/ButtonComponent';

import { 
  Container,
  Content,
  Emoji,
  Title,
  SubTitle,
  FooterView,
} from './styles';

const Confirmation: React.FC = (props) => {
  const navigation = useNavigation();

  const handleConfirmation = () => {
    navigation.navigate('PlantSelect');
  }
  
  return (
    <Container>
      <Content>
        <Emoji>😀</Emoji>

        <Title>Prontinho!</Title>

        <SubTitle>
          Agora vamos começar a cuidar das suas
          plantinhas com muito cuidado.
        </SubTitle>

        <FooterView>
          <ButtonComponent onPress={handleConfirmation}>
            Começar
          </ButtonComponent>
        </FooterView>
      </Content>
    </Container>
  );
}

export default Confirmation;