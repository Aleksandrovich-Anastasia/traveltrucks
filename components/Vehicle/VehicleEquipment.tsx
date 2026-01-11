import { useCamperStore } from '@/store/useCamperStore';
import styles from './Vehicle.module.css';

export const VehicleEquipment = () => {
  const { filters, updateFilter } = useCamperStore();

  // Додаємо поле iconId, яке відповідає ID у вашому sprite.svg
  const options = [
    { id: 'AC', label: 'AC', iconId: 'icon-ac' },
    { id: 'kitchen', label: 'Kitchen', iconId: 'icon-kitchen' },
    { id: 'bathroom', label: 'Bathroom', iconId: 'icon-bathroom' },
    { id: 'TV', label: 'TV', iconId: 'icon-tv' },
    { id: 'automatic', label: 'Automatic', iconId: 'icon-automatic' },
  ];

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Vehicle equipment</h3>

      <div className={styles.list}>
        {options.map(opt => {
          const isActive = filters[opt.id];

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => updateFilter(opt.id, !isActive)}
              className={`${styles.button} ${
                isActive ? styles.active : ''
              }`}
            >
              {/* Додаємо SVG перед текстом */}
              <svg width="32" height="32" className={styles.icon}>
                <use href={`/sprite.svg#${opt.iconId}`} />
              </svg>
              
              <span className={styles.label}>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};