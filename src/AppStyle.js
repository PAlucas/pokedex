import styled from 'styled-components';

export const DivMain = styled.div `
    display  : flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivLupa = styled.div`
    margin-top: 10px;
    border-radius: 50%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    :hover{
        cursor: pointer;
    }
`;