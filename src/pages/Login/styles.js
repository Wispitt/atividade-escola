import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55vw;
    }
`;

export const Title = styled.h3`
    text-align: center;
`;

export const Input = styled.input`
    border: 2px solid black;
    border-radius: 10px;
    height: 30px;
    width: 100%;
    font-size: 17.5px;
    padding-left: 10px;
`;

export const Button = styled.button`
    margin-top: 20px;
    width: 60%;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
    border: 2px solid black;

    &:hover {
        background-color: #afafaf;
    }

    &:active {
        background-color: #8d8c8c;
    }
`;