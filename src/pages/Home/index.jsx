import { Title, Inf, Container, Img, Button } from './styles';
import { useNavigate } from 'react-router-dom';

import myPhoto from '../../assets/my-photo.jpeg';

export function Home() {

  const navigate = useNavigate()

  return (
    <Container>
      <Img src={myPhoto}></Img>
      <Inf>
        <Title>My name is Wesley dos Santos Gois!</Title>
        <p>I am from Conçeicão do Coité - Ba. 
          I am eighteen years old and don't have a profession, 
          but I am taking a programming course. 
          My parents are very present in my life; 
          although we argue a lot, 
          they are a good family. 
          I really enjoy gaming and watching anime in my free time. 
          As I mentioned earlier, 
          I am studying programming and plan to become a professional Full Stack developer.
          </p>
      </Inf>
      <Button onClick={() => navigate('/')} type='button'>return</Button>
    </Container>
  )
}
