import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 20px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.colors.shape};
  margin: 5px 0;
`;

export const NamePlant = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 17px;
  color: ${props => props.theme.colors.heading};
`;

export const Detail = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.body_dark};
`;

export const Remove = styled.View`

`;

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  justify-content: center;
  align-items: center;
  height: 85px;
  background-color: ${props => props.theme.colors.red};
  margin-top: 15px;
  border-radius: 20px;
  position: relative;
  right: 20px;
  padding-left: 15px;
`;
