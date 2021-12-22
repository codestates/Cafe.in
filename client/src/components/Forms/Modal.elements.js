

import styled from 'styled-components';
import { MdClose } from 'react-icons/md'
import imgkakao from '../../images/kakao-login.png'
import imggoogle from '../../images/google-login.png'
import { FaMugHot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  
  background: rgba(0, 0, 0, 0.3);
  /* color: rgba(139, 99, 49, 1); */
  position: fixed;   /* scroll 내려도 Modal 창 위치는 고정!!! */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 0px;
  left: 0px;
`;

export const ModalLogo = styled(Link)`
  color: #361a05;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
`;

export const ModalIcon = styled(FaMugHot)`
  margin-right: 0.9em;
  margin: 20px 20px;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 530px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.4);
  /* background: #fff; */
  background: #D7AC87;
  color: #000;
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`

  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;

  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 200px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #361a05;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #361a05;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
`;