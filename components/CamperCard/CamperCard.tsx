import Image from 'next/image'; 
import Link from 'next/link'; // Імпортуємо Link
import { useCamperStore } from '@/store/useCamperStore';
import styles from './CamperCard.module.css';

export const CamperCard = ({ camper }: { camper: any }) => {
  const { favorites, toggleFavorite } = useCamperStore();
  const isFavorite = favorites.includes(camper.id);

  const equipmentKeys = [
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
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <Image 
          src={camper.gallery[0].thumb} 
          alt={camper.name} 
          fill 
          className={styles.img}
          sizes="(max-width: 768px) 100vw, 290px" 
          priority={false}
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>
          
          <div className={styles.priceBox}>
            <span className={styles.price}>
              €{camper.price.toFixed(2)}
            </span>
            
            <button 
              type="button"
              onClick={() => toggleFavorite(camper.id)}
              className={styles.favBtn}
            >
              <svg className={`${styles.heart} ${isFavorite ? styles.active : ''}`}>
                <use href="/sprite.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.meta}>
          <div className={styles.rating}>
            <svg className={styles.iconStar}>
              <use href="/sprite.svg#icon-star" />
            </svg>
            <span className={styles.ratingText}>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.locationBox}>
            <svg className={styles.iconMap}>
              <use href="/sprite.svg#icon-map" />
            </svg>
            <p className={styles.location}>{camper.location}</p>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.tags}>
          <div className={styles.tag}>
            <svg className={styles.tagIcon}><use href="/sprite.svg#icon-automatic" /></svg>
            <span className={styles.tagLabel}>{camper.transmission}</span>
          </div>

          <div className={styles.tag}>
            <svg className={styles.tagIcon}><use href="/sprite.svg#icon-engine" /></svg>
            <span className={styles.tagLabel}>{camper.engine}</span>
          </div>

          {equipmentKeys.map(item => camper[item.id] && (
            <div key={item.id} className={styles.tag}>
              <svg className={styles.tagIcon}>
                <use href={`/sprite.svg#${item.icon}`} />
              </svg>
              <span className={styles.tagLabel}>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* ЗАМІНЮЄМО КНОПКУ НА LINK */}
        <Link 
          href={`/catalog/${camper.id}`} 
          className={styles.moreBtn}
          target="_blank" // Додайте це, якщо хочете, щоб деталі відкривалися в новій вкладці
        >
          Show more
        </Link>
      </div>
    </div>
  );
};