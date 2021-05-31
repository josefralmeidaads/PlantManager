import React from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

import loadAnimation from '../../assets/load.json';
import { Container } from './styles';

const Load: React.FC = () => {
  return (
    <Container>
      <LottieView 
        source={loadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  }
})

export default Load;