import { useCamperStore } from '@/store/useCamperStore';
import styles from './Vehicle.module.css'; // Використовуємо той самий файл стилів

export const VehicleType = () => {
  const { filters, updateFilter } = useCamperStore();

  // Створюємо масив об'єктів, щоб додати назви іконок та коректні лейбли
  const types = [
    { id: 'panelTruck', label: 'Van', iconId: 'icon-van' },
    { id: 'fullyIntegrated', label: 'Fully Integrated', iconId: 'icon-fully' },
    { id: 'alcove', label: 'Alcove', iconId: 'icon-alcove' },
  ];

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Vehicle type</h3>

      <div className={styles.list}>
        {types.map((type) => {
          // Перевіряємо, чи цей тип кузова зараз обраний у фільтрах
          const isActive = filters.form === type.id;

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => updateFilter('form', isActive ? '' : type.id)}
              className={`${styles.button} ${isActive ? styles.active : ''}`}
            >
              {/* Іконка зі спрайту (розмір 32x32 як у Equipment) */}
              <svg width="32" height="32" className={styles.icon}>
                <use href={`/sprite.svg#${type.iconId}`} />
              </svg>
              
              <span className={styles.label}>{type.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};