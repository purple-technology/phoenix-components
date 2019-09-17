import styled from "styled-components";
import Select from 'react-select'

export const PlaceholderText = styled.span<any>`
  position: absolute;
  transition: all .25s;
  pointer-events: none;
  top: ${({ placeholderUp }: any) => placeholderUp ? "6px" : "22px"};
  left: 15px;
  font-size: ${({ placeholderUp }: any) => placeholderUp ? "12px" : "15px"};
  color: ${({ placeholderUp }: any) => placeholderUp ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.5)"};
`;

export const SelectContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
  z-index: 999;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`
export const StyledControl = styled.div`
  & > div {
    padding: 8px 5px 2px;
    border: 1px solid #dedede;
    border-radius: 3px;
    box-sizing: content-box;
    height: 47px !important;
    font-size: 15px;
  }
`;

export const StyledIndicatorContainer = styled.div`
  height: 40px;
`;

export const Error = styled.div`
  color: rgba(204, 0, 0, 0.82);
  padding: 5px 0;
  font-size: 13px;
  margin-top: 2px;
`;

