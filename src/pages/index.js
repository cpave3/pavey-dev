import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import loremojiImage from '../images/loremoji.png';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';

import Tile from '../components/Tile';

const bgColor = '#fbc531';
const lightColor = '#f5f6fa';
const darkColor = '#2f3640';

const Landing = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${lightColor};
`;

const Header = styled.header`
  background-color: ${bgColor};
  min-height: 140px;
  max-height: 33vh;
  position: relative;
`;

const Image = styled.img`
  border-radius: 100%;
  border: 10px solid ${lightColor};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.div`
  margin-top: 100px;
  background-color: ${lightColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    text-align: center;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 10px;
  color: ${darkColor};
  padding: 0 15px 15px 15px;
  border-bottom: 5px solid #fbc531;
  display: inline-block;
`;

const Divider = styled.div`
  margin: 0 25px;
  border: 1px solid #dcdde1;
`;

const TileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const imgUrl = `https://s.gravatar.com/avatar/9d1359002d2d9550fb0a8245496bdf02?s=200`;

const IndexPage = () => (
  <Landing>
    <Header>
      <Image src={imgUrl} />
    </Header>
    <Content>
      <div>
        <H1>Cameron Pavey</H1>
      </div>
      <TileWrapper>
        <Tile
          title="Loremoji Ipsum"
          image={loremojiImage}
          content="An emoji-enhanced placeholder text generator"
          link="https://loremoji.app.pavey.dev"
        />
      </TileWrapper>
    </Content>
  </Landing>
);

export default IndexPage;
