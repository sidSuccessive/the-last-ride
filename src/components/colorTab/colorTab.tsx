import React,{ useContext} from 'react';
import {StyledColorAside} from './StyledColorTab';
import { CounterContext } from '../../App';

const ColorTab:React.FC = () => {
    const {getTheme} = useContext(CounterContext);
    const getColorHandler = (event:React.MouseEvent) => {
        getTheme(event.currentTarget.className);

    }
    return <StyledColorAside>
        <h6>Change Background</h6>
        <button type='button' aria-label = 'green' className='green' onClick={getColorHandler}>Green</button>
        <button type='button' aria-label = 'blue' className='blue' onClick={getColorHandler}>Blue</button>
        <button type='button' aria-label = 'white' className='white' onClick={getColorHandler}>White</button>
    </StyledColorAside>     
}

export default ColorTab;