import styled from "styled-components";
import Select from 'react-select'

interface StyledControlProps {
  error?: string | boolean
}

interface PlaceholderTextProps {
  placeholderUp?: boolean
}

export const PlaceholderText = styled.span<PlaceholderTextProps>`
  position: absolute;
  transition: all .25s;
  pointer-events: none;
  top: ${({ placeholderUp }: PlaceholderTextProps) => placeholderUp ? "6px" : "22px"};
  left: 15px;
  font-size: ${({ placeholderUp }: PlaceholderTextProps) => placeholderUp ? "12px" : "15px"};
  color: ${({ placeholderUp }: PlaceholderTextProps) => placeholderUp ? "rgba(0, 0, 0, 0.6)" : "inherit"};
`;

export const SelectContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  position: relative;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`
export const StyledControl = styled.div<StyledControlProps>`
  & > div {
    padding: 8px 5px 2px;
    border: 1px solid ${({ error }: StyledControlProps) => error ? "rgba(204, 0, 0, 0.82)" : "#dedede"};
    border-radius: 3px;
    box-sizing: content-box;
    height: 47px !important;
    font-size: 15px;
    box-shadow: ${({ error }: StyledControlProps) => error && "none !important"};

    &:hover {
      border: 1px solid ${({ error }: StyledControlProps) => error ? "rgba(204, 0, 0, 0.82)" : "#dedede"};
    }
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

