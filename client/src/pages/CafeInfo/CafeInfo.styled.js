import styled from 'styled-components';

export const CafePageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2em 5em 0em;
  background: ${ ({theme}) => theme.colors.mainBackground };
`;

export const Cafe1ImageWrapper = styled.div`
  height: 29vh;
  width: 100%;
  opacity: .8;
`

export const Cafe2InfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #ccc;
  margin: 4px 0 4px 0px ;
  display: flex;
  flex-direction: row;
`

export const Cafe3HashtagWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  margin: 10px 0 10px 0px ;


  @media screen and (max-width: 960px) {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;

}

`
export const Cafe4MapWrapper = styled.div`
  height: 40vh;
  margin-top : 40px;

`

