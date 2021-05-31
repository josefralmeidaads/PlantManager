import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${prpos => prpos.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${prpos => prpos.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
`;

export const ImgHeader = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 35px;
`;
