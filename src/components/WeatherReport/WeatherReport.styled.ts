import styled from 'styled-components';

type Custom = {
    theme: string;
}

const StyledWeatherReportWrapper = styled.div<Custom>`
    width: 94%;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 1px 2px #eee;
    padding: 1em;
    margin: 0 auto;
    ${({theme})=>`
        background-color: ${theme};
    `}
    .weather-today {
        background-color: #fff;
        padding: 0.5em;
    }
    p {
        background-color: #838383;
        padding: 0.5em;
    }
`;

export { StyledWeatherReportWrapper };