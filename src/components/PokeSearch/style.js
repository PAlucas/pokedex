import styled, {keyframes} from 'styled-components';

const modalAppear = keyframes`
    from{
        opacity: 0.1;
    }
    to{
        opacity: 1;
    }
`;

export const ModalDiv = styled.div `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 200px;
    background-color: white;
    border-radius: 20px;
    animation-name: ${modalAppear};
    animation-duration: 1s;
`;

export const PokemonInput = styled.input`
    border-radius: 5px;
    margin-bottom: 5px;
`;