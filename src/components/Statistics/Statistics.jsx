import StatisticsCard from './StatisticsCard';
import data from 'path/data.json';
import css from './Statistics.module.css';

export default function Statistics() {
  return (
    <section className={css.statistics}>
      <h2 className={css.statistics__title}>Upload stats</h2>
      <ul className={css.statistics__statList}>
        {data.map(d => (
          <StatisticsCard
            key={d.id}
            label={d.label}
            percentage={d.percentage}
          />
        ))}
      </ul>
    </section>
  );
}
