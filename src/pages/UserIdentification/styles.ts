import styled, { css } from 'styled-components/native';

interface InputTextProps {
  Focus: boolean;
  Filled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  margin-top: 10px;
  width: 100%;
  padding: 0 40px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 44px;
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.heading};
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputTextProps>`
  border-bottom-width: 2px;
  border-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.heading};
  font-size: 18px;
  margin-top: 50px;
  text-align: center;
  width: 80%;
  padding: 10px;

  ${props => props.Focus && css`
    border-color: ${props => props.theme.colors.green};
  `};

  ${props => props.Filled && css`
    border-color: ${props => props.theme.colors.green};
  `};
`;
