import { useState } from 'react';
import { Title, Input, Container, Button } from './styles';
import { useNavigate } from 'react-router-dom';

export function Login() {

  const navigate = useNavigate()

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const valor = evento.target.elements.meuInput.value;
    if(valor == 'Débora') {
      navigate('/home')
    }
  };

  return (
    <Container>
        <Title>Use your password here</Title>
      <form onSubmit={handleSubmit}>
        <Input name='meuInput' type='text'
        placeholder='Enter the correct password'>
        </Input>
        <Button type='submit'>To Enter</Button>
       </form>
    </Container>
  )
}
