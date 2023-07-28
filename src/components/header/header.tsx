import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './header.styled';
type Children = {
    children?: React.ReactNode
}

const Header:React.FC<Children> = ({children}) => {
    return <>
        <StyledHeader>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/weather">Weather</NavLink>
                <NavLink to="/showUser">Show User</NavLink>
            </ul>
        </StyledHeader>
    </>
}

export default Header;