import styled from "styled-components";
import get from "lodash/get";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Pager = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ForwardArrow = styled.i`
  border: solid ${({ theme }) => get(theme, "colors.primary", "")};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  cursor: pointer;
`;

export const BackwardArrow = styled.i`
  border: solid ${({ theme }) => get(theme, "colors.primary", "")};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  cursor: pointer;
`;

export const PageNum = styled.span`
  font-size: 18px;
`;

export const TotalResults = styled.span`
  font-size: 18px;
  line-height: 20px;
  text-align: center;
`;
