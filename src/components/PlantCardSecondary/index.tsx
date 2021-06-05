import { Feather } from '@expo/vector-icons';
import React, { ReactNode } from 'react';
import { Animated } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import theme from '../../../styles/theme';

import { Container, 
  Detail, 
  NamePlant, 
  TimeLabel, 
  Time, 
  Remove, 
  ButtonRemove, 
} from './styles';

interface PlantsProps extends RectButtonProps {
  children?: ReactNode;
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

const PlantCardSecondary: React.FC<PlantsProps> = ({children , handleRemove, data,...rest}) => {
  return (
  <Swipeable
    overshootRight={true}
    overshootLeft={false}
    renderRightActions={() => (
      <Animated.View>
        <Remove>
          <ButtonRemove
            onPress={handleRemove}
          >
            <Feather 
              name="trash"
              size={32}
              color={theme.colors.white}
            />
          </ButtonRemove>
        </Remove>
      </Animated.View>
    )}
  >  
    <Container {...rest}>
      {children ? children :
        (<>
          <SvgFromUri 
            uri={data.photo}
            width={50}
            height={50}
          />
          <NamePlant>
            {data.name}
          </NamePlant>

          <Detail>
            <TimeLabel>
              Regar às
            </TimeLabel>
            <Time>
              {data.hour}
            </Time>
          </Detail>
        </>
        )
      }
    </Container>
  </Swipeable>
  );
}

export default PlantCardSecondary;