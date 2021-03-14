import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgTrees } from 'react-icons/cg';
import Forest from '../video/Forest.mp4';
import { useHistory } from 'react-router';
import { getAllHabits } from '../API/habits';
import { useSampleDispatch } from '../Store/LoginToggleContext';
import styled from 'styled-components';
import img1 from '../img/main1.gif';
import img2 from '../img/main2.gif';
import img3 from '../img/main3.jpg';
const Container = styled.div`
  width: 100%;
  ${'' /* height: 100vh; */}
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ImageContainer = styled.div`
  @media screen and (max-width: 1024px) {
    margin-top: 30%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30%;
  }
`;
const Div = styled.div`
  height: 100vh;
  text-align: center;
  margin: 10% 0;
  .trigger-right {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1024px) {
    height: 80vh;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
`;

const Background = styled.div`
  background-color: #bddaba;
  text-align: center;
`;

const Background2 = styled.div`
  text-align: center;
`;

const MainImage = styled.img`
  width: 70%;
  height: 50%;
`;

const MainImage3 = styled.img`
  width: 70%;
  height: 50%;
`;
const MainBlock = styled.div`
  position: relative;
`;

const Video = styled.video`

  width: 100%;
  height: 100vh;
  object-fit: cover;
  transform: translate(-50%, -50%)
  z-index: -1;
`;
const TreeAndTitle = styled.div`
  position: absolute;
  top: 5%;
  left: 45%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .TreeAndTitle__Link {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    margin-bottom: 10%;
  }
`;

const TreeBlock = styled.div`
  color: white;
  font-size: 35px;
  display: flex;
  flex-direction: column;
  .treeIcon {
    font-size: 8rem;
  }
`;
const StartButton = styled.button`
  min-width: 180px;
  margin-left: 40%;
  margin: 10px 0;
  padding: 0;
  width: 20%;
  height: 6vh;

  color: #fff;
  font-weight: bolder;
  border: none;
  background-size: 300% 100%;
  border-radius: 5px;

  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #0ba360,
    #3cba92,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  .startButton__button {
    padding: 8% 30%;
    text-decoration: none;
    color: white;
    font-size: 150%;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 15%;
    height: 5vh;
    font-size: 1rem;
  }
`;

function Main(props) {
  const history = useHistory();
  const url = new URL(window.location.href);
  const token = url.search.substr(14);
  const dispatch = useSampleDispatch();

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', String(token));
      dispatch({ type: 'SET_TOGGLE', toggle: true });
      async function getHabits() {
        const result = await getAllHabits();
        if (result) {
          props.handleHabits(result);
        }
      }
      getHabits();
      history.push('/home');
    }
  }, []);

  return (
    <Container>
      {token ? (
        <> </>
      ) : (
        <Container2>
          <MainBlock data-aos="fade" data-aos-duration="1000">
            <Video autoPlay loop muted>
              <source src={Forest} type="video/mp4" />
            </Video>
            <TreeAndTitle>
              <TreeBlock>
                <CgTrees className="treeIcon" />
                습관나무
              </TreeBlock>
              <Link className="TreeAndTitle__Link" to="/home">
                시작하기
              </Link>
            </TreeAndTitle>
          </MainBlock>
          <ImageContainer>
            <Div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="1200"
            >
              <Background>
                <MainImage src={img1}></MainImage>
              </Background>
            </Div>
            <Div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="1200"
            >
              <Background2>
                <MainImage src={img2}></MainImage>
              </Background2>
            </Div>

            <Div
              className="trigger-right"
              data-aos="fade-left"
              data-aos-offset="550"
              data-aos-duration="1200"
            >
              <Background>
                <MainImage3 src={img3}></MainImage3>
              </Background>
              <StartButton
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-anchor=".trigger-right"
                data-aos-anchor-placement="top-bottom"
              >
                <Link className="startButton__button" to="/home">
                  시작하기
                </Link>
              </StartButton>
            </Div>
          </ImageContainer>
        </Container2>
      )}
    </Container>
  );
}

export default Main;
