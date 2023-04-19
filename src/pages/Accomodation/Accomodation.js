import Carousel from '../../components/Carousel/Carousel';
import data from '../../data/data.json';
import StarList from '../../components/StarList/StarList';
import Tag from '../../components/Tag/Tag';
import styles from './Accomodation.module.css';
import Collapse from '../../components/Collapse/Collapse';

export default function Accomodation() {
  return (
    <>
      <Carousel
        className={styles['accomodation-carousel']}
        pictures={data[3].pictures}
        title={data[3].pictures}
      />
      <div className={styles['accomodation-caption']}>
        <div>
          <h1 className={styles['accomodation-title']}>{data[3].title}</h1>
          <p className={styles['accomodation-location']}>{data[3].location}</p>
          {data[3].tags.length && (
            <ul className={styles['accomodation-tag-list']}>
              {data[3].tags.map((t) => (
                <li key={t}>
                  <Tag content={t} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div className={styles['accomodation-host']}>
            <span className={styles['host-name']}>{data[3].host.name}</span>
            <img
              src={data[3].host.picture}
              alt={data[3].host.name}
              className={styles['host-avatar']}
            />
          </div>

          <StarList
            className={styles['accomodation-star-list']}
            rating={data[3].rating}
          />
        </div>
      </div>

      <div className={styles['accomodation-collapse-container']}>
        <Collapse
          className={styles['accomodation-collapse']}
          summary="Description"
        >
          {data[3].description}
        </Collapse>
        <Collapse
          className={styles['accomodation-collapse']}
          summary="Équipements"
        >
          <ul>
            {data[3].equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </>
  );
}
