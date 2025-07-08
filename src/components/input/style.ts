import styled from "styled-components";

export const InputStyle = styled.input`
    padding: 15px;
    border: solid 1px;
    border-radius: 6px;
    margin-right: 5px;
    font-size: 12pt;
`;

export const Btn = styled.button`
    padding: 15px;
    font-size: 12pt;
    border: solid 1px;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
        background-color: rgb(233, 233, 233);
    }
    
    &:active {
        background-color: rgb(212, 210, 210);
    }
`; 