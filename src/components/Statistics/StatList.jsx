import Statistics from './Statistics';
import Title from './Title';

const StatList = ({ data, title }) => {
  return (
    <section className="statistics">
      <Title title={title} />
      <ul>
        {data.map(el => (
          <Statistics key={el.id} label={el.label} percent={el.percentage} />
        ))}
      </ul>
    </section>
  );
};

export default StatList;