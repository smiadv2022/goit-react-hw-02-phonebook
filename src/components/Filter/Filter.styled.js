import styled from '@emotion/styled';
export const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InputFilter = styled.input`
  display: block;
  width: 80%;

  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  outline: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;

  background-color: rgba(30, 26, 30, 0.5);
  cursor: pointer;
  &:hover {
    background-color: rgba(231, 120, 131, 0.15);

    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
