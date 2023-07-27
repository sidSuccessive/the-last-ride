import styled from 'styled-components';
type Custom = {
    theme?: string
  }
const StyledContainer = styled.div<Custom>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 94%;
    background: #f28d8d;
    border: 1px solid #898989;
    margin: 1em auto;
    padding: 1em 2em;
    ${({theme})=>`
    background: ${theme};
    `}
`;
 
const StyledForm = styled.form`
    background: #efefef;
    padding: 2em;
    box-shadow: #eee 1px 2px 5px;
    button {
        padding: 1em;
        display: flex;
        justify-content: center;
        width: 50%;
        transform: translateX(50%);
    }
`;

const StyledCountText = styled.p`
    background: #fff;
    padding: 1em;
    border: 1px solid #8e8989;
    border-radius: 4px;
    box-shadow: #eee 1px 2px 5px;
    font-size: 18px;
    font-weight: bold;
`;

const StyledFormSubContainer = styled.div`
    padding: 1em 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
    label {
        font-size: 20px;
        padding: 1em;
    }
    input {
        font-size: 20px;
        padding: 1em;
        border-radius: 10px;
    }
`;

const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 1em 0;
`;

const StyledButton = styled.button`
    padding: 1em;
    background: #5b9e59;
    outline: none;
    border: 1px solid #fff;
    border-radius: 10px;
    box-shadow: #eee 1px 2px 5px;
`;

const StyledButtonRed = styled(StyledButton)`
  background-color: red;
`

export { StyledButton, StyledButtonsContainer,
    StyledFormSubContainer, StyledCountText, StyledForm,
    StyledContainer, StyledButtonRed
}