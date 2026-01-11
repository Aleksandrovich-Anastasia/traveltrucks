import styles from './BookingForm.module.css';

export const BookingForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking successful!");
    window.location.reload();
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.sub}>Stay connected! We are always ready to help you.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Name*" required className={styles.input} />
        <input type="email" placeholder="Email*" required className={styles.input} />
        <input type="date" placeholder="Booking date*" required className={styles.input} />
        <textarea placeholder="Comment" className={styles.textarea}></textarea>
        
        <button type="submit" className={styles.submitBtn}>Send</button>
      </form>
    </div>
  );
};