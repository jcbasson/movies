import styled from "styled-components";
import get from "lodash/get";

export const Container = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
`;

export const SearchBox = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => get(theme, "colors.primary", "")};
  color: ${({ theme }) => get(theme, "colors.primary", "")};
  border-radius: 4px;
  height: 50px;
  padding-left: 5px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => get(theme, "colors.primary", "")};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => get(theme, "colors.primary", "")};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => get(theme, "colors.primary", "")};
  }
`;
