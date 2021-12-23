import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// with css we defined reusable styles
const OptionContainerStyles = css`
 padding: 10px 15px;
 cursor: pointer;
`;

export const HeaderContainer = styled.div`
 height: 70px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 margin-bottom: 25px;
`;

// as we are styling a component (Link), we have
// to pass it as a parameter function
export const LogoContainer = styled(Link)`
 height: 100%;
 width: 70px;
 padding: 25px;
`;

export const OptionsContainer = styled.div`
 width: 50%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
`;

// here we use the shared styles
export const OptionLink = styled(Link)`
 ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
 ${OptionContainerStyles}
`;
