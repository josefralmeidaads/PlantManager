import styled from 'styled-components/native';

export const ButtonTouch = styled.TouchableOpacity`
  height: 56px;
  width: 100%;
  background: ${props => props.theme.colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-bottom: 10px;
`;

export const ButtonTouchText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.heading};
`;

