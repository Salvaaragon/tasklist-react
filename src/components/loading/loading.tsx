// styles
import { LoadingContainer } from './loading.styled';

// types
type Props = {
  size?: number;
  speedSecond?: number;
};

const Loading = ({ size, speedSecond }: Props): React.ReactElement => {
  return <LoadingContainer size={size} speedSecond={speedSecond} />;
};

Loading.defaultProps = {
  size: 50,
  speedSecond: 0.5,
};

export default Loading;
