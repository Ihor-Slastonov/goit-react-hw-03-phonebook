import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
`;
export const FilterField = styled.input`
  margin-top: 10px;
  padding: 4px 4px 4px 20px;
  height: 20px;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 20px;
  transition: box-shadow 250ms linear;
  :hover,
  :focus {
    outline: none;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.75);
  }
`;
