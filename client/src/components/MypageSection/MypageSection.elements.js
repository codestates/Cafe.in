import styled from 'styled-components';

export const MypageSec = styled.div`
  color: #D7AC87;
  padding: 100px 0;
  background: ${({ lightBg }) => ('#D7AC87')};
`;

export const MypageRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const MypageColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 400px;
  padding-top: 0;
  padding-bottom: 0px;

  @media screen and (max-width: 300px) {
    padding-bottom: 30px;
  }
`;

export const ImgWrapper = styled.div`

  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

`;

export const Img = styled.img`

  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;
`;

export const Id = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#635949' : '#fff')};
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 1.8;
  font-weight: 600;

  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
`;

export const Name = styled.h1`
  margin-bottom: 14px;
  font-size: 24px;
  line-height: 1.8;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#635949' : '#fff')};

  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
`

export const Nickname = styled.p`
  font-size: 24px;
  line-height: 1.8;
  font-weight: 600;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#635949' : '#fff')};

  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
  `;


export const MypageSec2 = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  text-decoration: none;
  margin-top: 100px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;