import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Emoji = styled.Text`
  text-align: center;
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${props => props.theme.fonts.heading};
  text-align: center;
  color: ${props => props.theme.colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: ${props => props.theme.fonts.text};
  text-align: center;
  color: ${props => props.theme.colors.heading};
  line-height: 38px;
  padding: 0 20px;
`;

export const FooterView = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
