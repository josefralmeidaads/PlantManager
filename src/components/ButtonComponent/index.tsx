import React, { ReactNode } from 'react';
import { Text, TouchableOpacityProps } from 'react-native';

import { ButtonTouch, ButtonTouchText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  title?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, title,...rest }) => {
  return (
    <ButtonTouch {...rest}>
        <ButtonTouchText>
          {title ? (<Text>{title}</Text>) : children}
        </ButtonTouchText>
      </ButtonTouch>
  );
}

export default ButtonComponent;