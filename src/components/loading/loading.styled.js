// vendor
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  animation: spin ${(props) => props.speedSecond && `${props.speedSecond}s`} linear infinite;
  border: 5px solid #fff;
  border-radius: 50%;
  border-top: 5px solid #008cba;
  height: ${(props) => props.size && `${props.size}px`};
  width: ${(props) => props.size && `${props.size}px`};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
LoadingContainer.displayName = 'LoadingContainer';
