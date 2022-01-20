import styled from "styled-components";

export const CafeMapContainer = styled.div`
  height: 100%;
  opacity: 0.7;
  border-radius: 40px;
  box-shadow: 0 0px 10px #aaaaaa;
  overflow: hidden;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      transform: none;
    }
  }
`;
