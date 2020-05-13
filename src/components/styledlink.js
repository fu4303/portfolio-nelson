import styled from "styled-components"
import device from "./device"

const StyledLink = styled.a`
  border-bottom: 1px solid;
  border-color: #dcdee1;
  color: var(--secondary-color);
  font-size: 14px;

  &:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
    cursor: pointer;
  }

  @media only screen and (min-width: 722px) {
    font-size: 18px;
  }
`

export default StyledLink
