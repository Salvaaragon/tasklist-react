// vendor
import { useState } from 'react';

// components
import List from './list';
import Paginator from './paginator/paginator';

const TOTAL_ITEMS_PER_PAGE = 3;

const lists = [
  {
    name: 'list 1',
    description: 'description list 1',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 2',
    description: 'description list 2',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 3',
    description: 'description list 3',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 4',
    description: 'description list 4',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 5',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 6',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 7',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 8',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 9',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 10',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 11',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 12',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 13',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 14',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 15',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 16',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 17',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 18',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 19',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 20',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 21',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 22',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 23',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 24',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 25',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 26',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 27',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 28',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 29',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 30',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 31',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
  {
    name: 'list 32',
    date: new Date('2021-08-21T18:00:00.000Z'),
    tasks: [],
  },
];

const Lists = (): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const TOTAL_PAGES = Math.ceil(lists.length / 3);

  const handleClickPage = (newPage: number) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(newPage);
    }, 1000);
  };

  return (
    <div>
      <h1>Listas disponibles</h1>
      <ul>
        {lists.slice(0, currentPage * TOTAL_ITEMS_PER_PAGE + TOTAL_ITEMS_PER_PAGE).map((list, idx) => (
          <li key={idx}>
            <List {...list} />
          </li>
        ))}
      </ul>
      <Paginator currentPage={currentPage} handleClickPage={handleClickPage} totalPages={TOTAL_PAGES} isLoading={isLoading} />
    </div>
  );
};

export default Lists;
