import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const sdw = {
  df: {
    color: 'rgba(0, 0, 0, 0.75)',
    spread: '-15px',
  },
  hvr: {
    color: 'rgba(0, 0, 0, 0.75)',
    spread: '-23px',
  },
};

const TileWrapper = styled.div`
  max-width: 300px;
  background-color: #efefef;
  -moz-box-shadow: 10px 10px 35px ${sdw.df.spread} ${sdw.df.color};
  box-shadow: 10px 10px 35px ${sdw.df.spread} ${sdw.df.color};
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  transition: all ease-in-out 0.3s;
  &:hover {
    transform: scale(1.05);
    -moz-box-shadow: 10px 10px 73px ${sdw.hvr.spread} ${sdw.hvr.color};
    box-shadow: 10px 10px 73px ${sdw.hvr.spread} ${sdw.hvr.color};
  }
`;

const TileImage = styled.img`
    width: 300px;
    height: 150px;
    background-color: #535c68;
`;

const TileContent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const H2 = styled.h2``;

const P = styled.p`
  max-width: 100%;
`;

const Tile = ({ title, image, content, altText, link }) => (
  <a href={link} style={{ color: '#2f3640', margin: 'none' }}>
    <TileWrapper>
      <TileImage src={image} alt={altText || title} />
      <TileContent>
        <H2>{title}</H2>
        <P>{content}</P>
      </TileContent>
    </TileWrapper>
  </a>
);

export default Tile;
