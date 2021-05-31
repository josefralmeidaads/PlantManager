import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.shape};
`;

export const PlantName = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 24px;
  color: ${props => props.theme.colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.heading};
  font-size: 17px;
  margin-top: 20px;
`;

export const Controller = styled.View`
  background: #FFFFFF;
  width: 100%;
  padding: 0 20px;
  padding-top: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
  align-items: center;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipContainerImg = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipContainerText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${props => props.theme.fonts.text};
  font-size: 17px;
  text-align: justify;
  color: ${props => props.theme.colors.blue};
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.complement};
  color: ${props => props.theme.colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;
