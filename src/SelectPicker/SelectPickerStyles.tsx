import styled from 'styled-components'

export const SelectPickerWrapper = styled.div`
    font-family: 'Roboto', sans-serif;
`;

export const SelectWrapper = styled.div<any>`
    display: grid;
    grid-template-columns: ${({ optionsLength }) => `repeat(${optionsLength}, minmax(100px, 200px))`};
    grid-column-gap: 25px;
`

export const OptionDecription = styled.div`
    font-size: 12px;
    color: rgba(0,0,0,0.6);
    margin-top: 6px;
`

export const SingleCard = styled.div<any>`
    display: flex;
    position: relative;
    min-height: ${({ withImage }) => withImage ? "80px" : "auto"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14px 0;
    text-align: center;
    border: 1px solid;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    border-color: ${({ checked }: any) =>
        checked ? "#562878" : 'rgba(95,95,95,0.3)'};
    box-shadow: ${({ checked }: any) =>
        checked ? ' 0px 0px 11px 2px rgba(82, 41, 116, 0.1);' : 'none'};
    font-weight: 500;
    border-radius: 4px;
    transition: border 0.3s;
    cursor: ${({ checked, multiSelect }: any) => (checked && !multiSelect ? 'default' : 'pointer')};
    user-select: none;

    &:hover {
        border-color: #562878;
    }
`

export const CardImage = styled.img`
    max-width: 40px;
    margin-bottom: 10px;
`;

export const PickerLabel = styled.label`
    display: block;
    margin: 0 auto 30px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
`;

export const CheckMark = styled.div`
    position: absolute;
    width: 32px;
    height: 32px;
    background: #562878;
    border-radius: 2px;
    top: -15px;
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Error = styled.div`
  color: rgba(204, 0, 0, 0.82);
  padding: 5px 0;
  font-size: 13px;
  margin-top: 2px;
`;
