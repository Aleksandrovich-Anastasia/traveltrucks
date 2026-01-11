import styles from './FeaturesTab.module.css';

export const FeaturesTab = ({ camper }: { camper: any }) => {
  const equipment = [
    { id: 'AC', label: 'AC', icon: 'icon-ac' },
    { id: 'bathroom', label: 'Bathroom', icon: 'icon-bathroom' },
    { id: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { id: 'TV', label: 'TV', icon: 'icon-tv' },
    { id: 'radio', label: 'Radio', icon: 'icon-radio' },
    { id: 'refrigerator', label: 'Refrigerator', icon: 'icon-refrigerator' },
    { id: 'microwave', label: 'Microwave', icon: 'icon-microwave' },
    { id: 'gas', label: 'Gas', icon: 'icon-gas' },
    { id: 'water', label: 'Water', icon: 'icon-water' },
  ];

  return (
    <div className={styles.featuresTab}>
      <div className={styles.tags}>
        <div className={styles.tag}><svg><use href="/sprite.svg#icon-automatic" /></svg><span>{camper.transmission}</span></div>
        <div className={styles.tag}><svg><use href="/sprite.svg#icon-engine" /></svg><span>{camper.engine}</span></div>
        {equipment.map(item => camper[item.id] && (
          <div key={item.id} className={styles.tag}>
            <svg><use href={`/sprite.svg#${item.icon}`} /></svg>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.details}>
        <h3 className={styles.subTitle}>Vehicle details</h3>
        <ul className={styles.detailsList}>
          {['form', 'length', 'width', 'height', 'tank', 'consumption'].map(key => (
            <li key={key} className={styles.detailItem}>
              <span className={styles.detailLabel}>{key}</span>
              <span className={styles.detailValue}>{camper[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};