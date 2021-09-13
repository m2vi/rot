import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 560px;
`;

export const Textarea = styled.textarea`
  background: none;
  padding: 15px;
  width: 100%;
  height: 300px;
  resize: none;
  background: #1f2633;
  border-radius: 8px;
  border: 0;
  outline: 0;
  font-size: 16px;
  color: #fff;

  &::placeholder {
    color: #8b93a7;
  }

  &:disabled {
    cursor: pointer;
  }
`;

export const TextareaTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 300px;
  left: 0;
  cursor: pointer;
`;

export const TextareaTopWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectWrapper = styled.div`
  max-width: 8rem;
  width: 100%;
`;

export const ToastText = styled.span`
  display: flex;
  align-items: center;
`;
