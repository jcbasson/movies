import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  padding: 33px;
  width: 100%;
  flex-direction: column-reverse;
  @media (min-width: 426px) {
    flex-direction: row;
  }
`;

export const LeftColumn = styled.div`
  width: 100%;
  @media (min-width: 426px) {
    width: 55%;
  }
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

export const RightColumn = styled.div`
  width: 100%;
  @media (min-width: 426px) {
    width: 45%;
  }
`;

export const MovieTitle = styled.span`
  font-weight: bold;
  font-size: 45px;
  text-align: center;
  @media (min-width: 426px) {
    text-align: left;
  }
`;

export const MovieGenres = styled.span`
  font-size: 14px;
  line-height: 50px;
`;

export const MoviePlot = styled.p``;

export const MovieDetailContainer = styled.span`
  line-height: 25px;
  font-size: 16px;
`;

export const MovieDetailLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const MoviePosterImg = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const MovieDetails = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.span`
  text-decoration: underline;
  font-weight: bold;
  line-height: 80px;
  font-size: 30px;
  cursor: pointer;
  display: block;
  @media (min-width: 426px) {
    display: none;
  }
`;
