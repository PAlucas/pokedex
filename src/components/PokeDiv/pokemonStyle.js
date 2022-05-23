import styled from 'styled-components';

export const PokeDiv = styled.div `
    display: flex;
    height: 27vh;
    width: calc(27vh);
    border-radius: 50%;
    background-color: ${props => props.colorDiv || "black"};
    margin-top: 10px;
`;