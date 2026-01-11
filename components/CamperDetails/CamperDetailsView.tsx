"use client";

import { useEffect, useState } from 'react';
import { fetchCamperById } from '@/services/api';
import Image from 'next/image';
import { FeaturesTab } from './FeaturesTab/FeaturesTab';
import { ReviewsTab } from '../ReviewsTab/ReviewsTab';
import { BookingForm } from './BookingForm/BookingForm';
import styles from './CamperDetails.module.css';

export default function CamperDetailsView({ id }: { id: string }) {
  const [camper, setCamper] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'features' | 'reviews'>('features');

  useEffect(() => {
    fetchCamperById(id).then(setCamper).catch(console.error);
  }, [id]);

  if (!camper) return <div className={styles.loader}>Loading...</div>;

  return (
    <div className={styles.container}>
      {/* 1. Header Section */}
      <section className={styles.header}>
        <h1 className={styles.name}>{camper.name}</h1>
        <div className={styles.meta}>
          <div className={styles.rating}>
            <svg className={styles.iconStar}><use href="/sprite.svg#icon-star" /></svg>
            <span>{camper.rating} ({camper.reviews.length} Reviews)</span>
          </div>
          <div className={styles.location}>
            <svg className={styles.iconMap}><use href="/sprite.svg#icon-map" /></svg>
            <span>{camper.location}</span>
          </div>
        </div>
        <p className={styles.price}>€{camper.price.toFixed(2)}</p>
      </section>

      {/* 2. Gallery */}
      <section className={styles.gallery}>
        {camper.gallery.map((img: any, index: number) => (
          <div key={index} className={styles.imageWrapper}>
            <Image src={img.original} alt={camper.name} fill className={styles.img} />
          </div>
        ))}
      </section>

      {/* 3. Description */}
      <p className={styles.description}>{camper.description}</p>

      {/* 4. Tabs & Booking Form Layout */}
      <div className={styles.tabsAndForm}>
        <div className={styles.tabsSection}>
          <div className={styles.tabHeaders}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'features' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'reviews' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'features' ? <FeaturesTab camper={camper} /> : <ReviewsTab reviews={camper.reviews} />}
          </div>
        </div>

        <aside className={styles.formAside}>
          <BookingForm />
        </aside>
      </div>
    </div>
  );
}