"use client";

import Filters from "./Filters/Filters";
import CamperList from "./CamperList/CamperList";
import styles from "./CatalogPageContent.module.css";

const CatalogPageContent = () => {
  return (
    <section className={styles.catalogpage}>
      <Filters />
      <CamperList />
    </section>
  );
};

export default CatalogPageContent;
