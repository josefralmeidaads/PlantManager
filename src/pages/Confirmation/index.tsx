import { CommonActions, useNavigation, useRoute } from '@react-navigation/core';
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

export interface ParamsConfirmation {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
}

const Confirmation: React.FC<ParamsConfirmation> = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as ParamsConfirmation;

  const handleMoveNextDisplay = () => {
    navigation.navigate(`${nextScreen}`);
  }
  
  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <SubTitle>
          {subtitle}
        </SubTitle>

        <FooterView>
          <ButtonComponent onPress={handleMoveNextDisplay}>
            {buttonTitle}
          </ButtonComponent>
        </FooterView>
      </Content>
    </Container>
  );
}

export default Confirmation;