import styled, {keyframes} from 'styled-components';

const imgRotate = keyframes`
    from{
        transform: translateX(0px);
        opacity: 0;
    }
    to{
        transform: translateX(10px);
        opacity: 1;
    }
`;

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
    height: 70vh;
    width: 40vw;
    min-width: 470px;
    background-color: white;
    border-radius: 20px;
    animation-name: ${modalAppear};
    animation-duration: 1s;
    @media (max-width: 600px){
        width: 98vw;
        min-width: 0;
        height: 80vh;
    }
`;

export const HeaderDiv = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    padding: 5px;
    border-bottom: 1px solid #ccc;
`;

export const PokemonPart = styled.div`
    display: flex;
    height: 40%;
`;
export const PokemonPartFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const PokemonDivInfoFooter = styled.div`
    width: 50%;
`;

export const PokemonImg = styled.img`
    height: 100%;
    animation-name: ${imgRotate};
    animation-duration: 3s;
    @media (max-width: 600px){
        height: 70%;
        width: calc(30vh);
        min-width: 0;
    }
`;

export const PokeinfoBasic = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
`;

export const CloseModalButton = styled.button`
    border: 0px;
    cursor: pointer;
    background-color: white;
`