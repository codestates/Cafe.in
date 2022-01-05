import styled ,{keyframes} from 'styled-components';

export const MainInfoSection = {};

const fadeIn = keyframes`from{
  opacity: 0}
  to{
    opacity: 1;
  };
}`

MainInfoSection.InfoSec = styled.div`
  color: #FDF5E6;
  padding: 100px ;
  padding-bottom : 200px;
  background: ${({ lightBg }) => ('#FDF5E6')};
`;

MainInfoSection.InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

MainInfoSection.InfoColumn = styled.div`
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

MainInfoSection.TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

MainInfoSection.ImgWrapper = styled.div`
  justify-content:center;
  align-items:center;
  height: 60vh;
  max-width: 555px;
  display: flex;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

MainInfoSection.TopLine = styled.div`
   color: ${({ lightTopLine }) => (lightTopLine ? '#aaaaaa' : '#fff')};
  text-shadow: 0px 0px 1px #ccc;
  justify-content: left;
  align-items: left;
  font-size: 18px;
  font-weight: 480;
  line-height: 16px;
  letter-spacing: 1px;
  margin-bottom: 16px;
  display: flex;
 /* animation : ${fadeIn} 1.5s forwards;
  opacity:0;
  transition-timing-function: cubic-bezier(0.785,0,135, 0.15,0.86);
*/
  /* animation: bounce 1s ease-in both;
@-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}
    40% {-webkit-transform: translateY(-30px) }
    60% {-webkit-transform: translateY(-20px);}
} 
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-20px);}
} 

    -webkit-animation-duration: 3s ;
    animation-duration: 1s infinite;
    -webkit-animation-name: bounce;
    animation-name: bounce;
*/
`;

MainInfoSection.Img = styled.img`
  height: 100vh;
  weight: 300vh;
  display: flex;
  justify-content:center;
  align-items:center;
  filter: drop-shadow(1px 1px 1px #CCCCCC);

  padding-right: 0;
  border: 0;
  max-width: 800px;
  vertical-align: middle;
  max-height: 700px; 

  @media screen and (max-width: 768px) {
    max-width: 300%;
    max-height: 100%;
    flex-basis: 140%;
    display: flex;
    justify-content: center;
  }

  animation: fadein 1s;
  -webkit-animation: fadein 1s; /* Safari and Chrome */
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

`;



MainInfoSection.Img2 = styled.img`
  height: 300vh;
  weight: 400vh;
  filter: drop-shadow(1px 1px 1px #CCCCCC);
  display: flex;
  max-height: 400px; 
  position: absolute;
  left : 1170px;
  bottom: 100px;

  shadow: 0 0px 7px #7A3F12;
  @media screen and (max-width: 1440px) {
    display: none;
    overflow: hidden ;
  }
  animation-delay: 3s;
  animation: fadeInRight 3s both; /* IE 10+, Fx 29+ */
} 

@keyframes fadeInRight {
  0% {
      opacity: 0;
      -webkit-transform: translateX(50px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateX(0);
  }
}

`;

MainInfoSection.Img3 = styled.img`
  height: 20vh;
  max-width: 100%;
  display: flex;
  position: absolute;
  left : 540px;
  filter: drop-shadow(1px 1px 1px #CCCCCC);
  bottom: 240px;

  }
  
  @media screen and (max-width: 1440px) {
    display: none;
    overflow: hidden ;
  }

  animation: fadeInLeft 3s both; 

@keyframes fadeInLeft {
  0% {
      opacity: 0;
      -webkit-transform: translateX(-50px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateX(0);
  }
}  
`

MainInfoSection.Img4 = styled.img`

  height: 6vh;
  filter: opacity(.3) drop-shadow(0 0 0 #FFC846); 
  weight: 6vh;
  float:left;
  padding : 0px 0.1% 1% 0px;
  display: flex;
  animation: fill  2s ;
  animation-delay: 2s;


  @keyframes fill{

    0%{
      background-position : 100px  900px;
      transform : translate(-90%, -50%) rotate(30deg);
    }
  
    40%{
      background-position : -200px  70px rotate(30deg);

    }
    100%{
      background-position : -300px  40px;
    }
  }
  ;

`
/*
export const Cup = styled.div`

  width : 270px;
  height : 240px;
  border : 5px solid #FDF5E6;
  border-radius: 4% 4% 40% 40%;
  position: relative;
  background-image: url(${coffee});
  box-shadow : 0px 0px 0px 5px #361a05; 
  background-repeat : repeat-x;
  background-position: 0px 190px;
  animation: fill  4s infinite;


  @keyframes fill{

    0%{
      background-position : 0px  190px;
      transform : translate(-50%, -50%) rotate(30deg);
    }
    25%{
      background-position : -100px  130px;
      transform : translate(-50%, -50%) rotate(40deg);
    }
    70%{
      background-position : -200px  70px;

    }
    100%{
      background-position : -300px  40px;
    }
  }

`*/



MainInfoSection.Heading = styled.h1`
   margin-bottom: 24px;
  font-size: 48px;
  letter-spacing: 2px;
  text-shadow: 1px 1px 1px #ccc;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? ' #7b95f2' : '#1c2237')};
`;

MainInfoSection.Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 30px;
  text-shadow : 0px 0px 1px #CCCCCC;
  font-size: 19px;
  line-height: 20px;
  font-weight: 480;
  color: ${({ lightTextDesc }) => (lightTextDesc ? ' #aaaaaa' : '#1c2237')};
  opacity: 0;
  animation: fadeIn 1s ease-in both;
  animation-delay:1s;

  @keyframes fadeIn {

    from {
      opacity: :0;
      transform:translate3d(0,-100%,0);
    }
    to{
      opacity: 1;
      transform:translate3d(0,0,0);
    }
  }
`;
