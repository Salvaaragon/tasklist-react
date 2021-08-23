// types
type Props = {
  name: string;
  date: Date;
  description?: String;
  tasks: Array<Object>;
};

const List = ({ name, date, description, tasks }: Props): React.ReactElement => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{date.toDateString()}</h3>
      <h4>{description}</h4>
      <p>Número de tareas: {tasks.length}</p>
    </div>
  );
};

List.defaultProps = {
  description: '-',
};

export default List;
