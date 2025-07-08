import styled from "styled-components";

export const Div = styled.div`
    margin-top: 15px;
    border: solid 1px;
    width: 30%;
    border-radius: 5px;
    text-align: center;
    font-family: arial;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    word-break: break-word;
    padding: 10px;

    &:hover {
        background-color: rgb(245, 244, 244);
    }
`;

export const Del = styled.div`
    cursor: pointer;
    font-size: 25pt;

    .btn {
        height: 100%;

        &:hover {
            color: red;
        }

        &:active {
            color: rgb(104, 6, 6);
        }
    }
`;