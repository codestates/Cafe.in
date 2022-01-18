import styled from "styled-components";

export const CafeInfoContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainBackground};
  color : ${({ theme }) => theme.colors.fontColor};  
  width: 100%;
  height: 70px;
  height: 80px;
`;

export const Phonenumber = styled.div`
  margin-top: 4px;
  margin-left: 30px;
  font-size: 22px;
  opacity: 0.4;
`;

export const Number = styled.span`
  font-size: 16px;
  margin-left: 10px;
  letter-spacing: 0.8px;
  font-weight: 700;
`;

export const Addressd = styled.span`
  font-size: 22px;
  margin-left: 30px;
  letter-spacing: 0.8px;
  opacity: 0.4;
`;

export const Address = styled.span`
  font-size: 17px;
  font-weight: 700;
  margin-left: 7px;
`;

