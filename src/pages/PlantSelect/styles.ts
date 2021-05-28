import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const HeaderContent = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
  line-height: 20px;
`;

export const ListButton = styled.View`
  padding: 30px 30px;
`;

export const ListPlants = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;
