import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 82vh;
`;

export const Title = styled.h3`
    text-align: center;
    height: 0;
`;

export const Inf = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: start;
    max-width: 330px;
    margin: 10px 0 30px;
    height: 100%;

    p {
        height: 0;
        font-size: 13px;
    }
`;

export const Img = styled.img`
    width: 180px;
    border-radius: 10px;
    margin-top: 25%;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        color: blue;
    }

    &:active {
        color: blue;
    }
`;