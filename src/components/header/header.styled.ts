import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: #eee;
    padding: 1em;
    margin-bottom: 20px;
    ul {
        display: flex;
        gap: 20px;
        a {
            text-decoration: none;
            &.active {
                color: red;
            }
        }
    }
`;

export {StyledHeader};