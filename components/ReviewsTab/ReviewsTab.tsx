import styles from './ReviewsTab.module.css';

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Props {
  reviews: Review[];
}

export const ReviewsTab = ({ reviews }: Props) => {
  // Функція для рендеру зірок рейтингу
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < rating;
      return (
        <svg
          key={index}
          className={`${styles.starIcon} ${isFilled ? styles.filledStar : styles.emptyStar}`}
        >
          <use href="/sprite.svg#icon-star" />
        </svg>
      );
    });
  };

  return (
    <div className={styles.reviewsTab}>
      <ul className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              {/* Аватарка з першою літерою імені */}
              <div className={styles.avatar}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              
              <div className={styles.reviewerInfo}>
                <p className={styles.reviewerName}>{review.reviewer_name}</p>
                <div className={styles.starsContainer}>
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>
            </div>
            
            <p className={styles.reviewComment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};