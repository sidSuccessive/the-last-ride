import React, { useContext, useState } from "react";
import { CounterContext } from '../App';
import ColorTab from "./colorTab/colorTab";
import { StyledButton, StyledButtonsContainer, StyledFormSubContainer, StyledCountText, StyledForm, StyledContainer, StyledButtonRed } from './Counter.styled';
type CounterVal = {
    count?: number
}

const Counter:React.FC<CounterVal> = (props:CounterVal) => {
    const {count, themeValue, addCount, deleteCount, addAmountCount } = useContext(CounterContext);
    const [amountToBeAdd, setAmountToBeAdd] = useState(0);
    function onCountHandler(e:React.FormEvent) {
        e.preventDefault();
        addAmountCount(amountToBeAdd);
    }
    function addHandler() {
        addCount();
    }

    function deleteHandler() {
        deleteCount();
    }

    function amountHandler(event:React.FormEvent<HTMLInputElement>) {
        setAmountToBeAdd(parseInt(event.currentTarget.value));

    }
    return(
        <StyledContainer theme={themeValue}>
            <StyledCountText>Count Value: {count}</StyledCountText>
            <StyledForm onSubmit={onCountHandler}>
                <StyledFormSubContainer>
                    <label htmlFor="getCountValue">Enter amount to add in Count</label>
                    <input id="getCountValue" placeholder="Enter amount in number" type="number" value={amountToBeAdd} onChange={amountHandler} />
                </StyledFormSubContainer>
                <button type="submit">Add</button>
            </StyledForm>
            <StyledButtonsContainer>
                <StyledButton onClick={addHandler} type="button">Add</StyledButton>
                <StyledButtonRed type="button" onClick={deleteHandler}>Delete</StyledButtonRed>
            </StyledButtonsContainer>
            <ColorTab />
        </StyledContainer>
    )
}

export default Counter;