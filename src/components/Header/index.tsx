import React, { useEffect, useState } from 'react';
import { 
  Container,
  Content,
  Greeting,
  UserName,
  ImgHeader, 
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>();
  useEffect(() => {
    const loadUsername = async() => {
      const name = await AsyncStorage.getItem('@plantmanager:user');
      if(!name){
        return;
      }
      setUserName(name);
    }
    loadUsername()
  }, [])

  return (
    <Container>
      <Content>
        <Greeting>Olá</Greeting>
        <UserName>{userName}</UserName>
      </Content>
      <ImgHeader source={{ uri: "https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/78850675_906950959701239_5697756477331079168_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=cp4t_hqyfqYAX_W-G8s&_nc_ht=scontent-gru1-2.xx&oh=a703db8076e8ea007fbe940de17f6350&oe=60D5484A" }}/>
    </Container>
  );
}

export default Header;