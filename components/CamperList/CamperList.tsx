import { useCamperStore } from '@/store/useCamperStore';
import { CamperCard } from '../CamperCard/CamperCard';
import styles from './CamperList.module.css';

export const CamperList = () => {
  const { items, setPage, page, hasMore } = useCamperStore();

  return (
    <div className={styles.container}>
      {items.length > 0 ? (
        items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))
      ) : (
        <p className={styles.empty}>
          No campers found. Try changing filters.
        </p>
      )}

      {/* Використовуємо стан hasMore зі стору для відображення кнопки */}
      {hasMore && items.length > 0 && (
        <button 
          onClick={() => setPage(page + 1)}
          className={styles.loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};