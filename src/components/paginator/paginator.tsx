// components
import Loading from '../loading/loading';
// styles
import { LoadButton } from './paginator.styled';

// types
type Props = {
  currentPage: number;
  handleClickPage: Function;
  isLoading: boolean;
  totalPages: number;
};

const Paginator = ({ currentPage, handleClickPage, isLoading, totalPages }: Props): React.ReactElement => {
  if (totalPages === 0 || currentPage === totalPages - 1) return <></>;

  const handleClick = (): Function | void => {
    if (!isLoading) handleClickPage(currentPage + 1);
  };

  return (
    <div>
      <LoadButton onClick={handleClick} disabled={isLoading}>
        Load more lists
      </LoadButton>
      {isLoading && <Loading size={30} speedSecond={1} />}
    </div>
  );
};

export default Paginator;
