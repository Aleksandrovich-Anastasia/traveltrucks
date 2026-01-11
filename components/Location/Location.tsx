import { useCamperStore } from '@/store/useCamperStore';
import styles from './Location.module.css';

export const Location = () => {
  const { filters, updateFilter } = useCamperStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Для текстового поля краще додати debounce, щоб не робити запит на кожну літеру
    updateFilter('location', e.target.value);
  };

  return (
  <div className={styles.location}>
    <label className={styles.title}>Location</label>

    <div className={styles.inputWrapper}>
      <svg className={styles.icon} aria-hidden="true">
        <use href="/sprite.svg#icon-map" />
      </svg>

      <input
        value={filters.location || ''}
        onChange={handleChange}
        className={styles.input}
        placeholder="City"
      />
    </div>
  </div>
);

};