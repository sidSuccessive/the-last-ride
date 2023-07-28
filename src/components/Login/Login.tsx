import React from 'react';
import { StyledLoginWrapper } from './Login.styled';

const Login:React.FC = () => {
    return <StyledLoginWrapper>
        <form>
            <div>
                <label htmlFor='user_name'> Enter Name</label>
                <input name="user_name" type="text" />
            </div>
            <div>
                <label htmlFor='user_pass'> Enter Password</label>
                <input name="user_pass" type="text" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </StyledLoginWrapper>
}

export default Login