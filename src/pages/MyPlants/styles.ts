import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  padding: 50px 30px;
`;

export const SpotLight = styled.View`
  width: 100%;
  background-color: ${props => props.theme.colors.blue_light};
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const WaterDropImg = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotLightText = styled.Text`
  color: ${props => props.theme.colors.blue};
  text-align: left;
  padding: 0 15px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
`;
