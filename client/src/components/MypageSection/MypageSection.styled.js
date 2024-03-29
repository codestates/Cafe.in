import styled from "styled-components";
import { FaMugHot, FaUserEdit } from "react-icons/fa";

export const MypageSec = styled.div`
  color: #d7ac87;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.mainBackground};
`;

export const MypageRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const MypageColumn = styled.div`
  margin-top: 20px;
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
  margin-left: 50px;
  padding-top: 0;
  padding-bottom: 0px;

  @media screen and (max-width: 300px) {
    padding-bottom: 30px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  padding-right: 0;
  max-width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  max-height: 200px;
  border-radius: 50%;
`;

export const Id = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine
      ? ({ theme }) => theme.colors.buttonPrimary
      : ({ theme }) => theme.colors.buttonSecondary};
  font-size: 18px;
  line-height: 1.8;
  font-weight: 600;

  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonSecondary};
    transition: 200ms ease-in;
  }
`;

export const Nickname = styled.p`
  font-size: 18px;
  line-height: 1.8;
  font-weight: 600;
  padding-bottom: 30px;
  color: ${({ lightTextDesc }) =>
    lightTextDesc
      ? ({ theme }) => theme.colors.buttonPrimary
      : ({ theme }) => theme.colors.buttonSecondary};

  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonSecondary};
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

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.buttonSecondary};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonPrimary};
    transition: 200ms ease-in;
  }
`;

export const NameIcon = styled(FaMugHot)`
  margin-right: 0.9em;
  margin-left: 0.9em;
  fill: ${({ theme }) => theme.colors.cardBackground};
`;

export const NameIconUser = styled(FaUserEdit)`
  padding-right: 0;
  border: 0;
  justify-content: middle;
  height: 10%;
  width: 10%;
`;
