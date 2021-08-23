// vendor
import styled from 'styled-components';

export const LoadButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#008cba')};
  border: solid 2px ${(props) => (props.disabled ? '#ccc' : '#fff')};
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  padding: 5px;
  text-align: center;
  transition-duration: 0.4s;
  width: 150px;

  :hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#fff')};
    border: solid 2px ${(props) => (props.disabled ? '#ccc' : '#008cba')};
    color: ${(props) => (props.disabled ? '#fff' : '#008cba')};
  }
`;
LoadButton.displayName = 'LoadButton';
