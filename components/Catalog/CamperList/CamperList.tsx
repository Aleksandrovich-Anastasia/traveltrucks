"use client";

import CamperCard from "./CamperCard/CamperCard";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";

const CamperList = () => {
  return (
    <section>
      <CamperCard />
      <LoadMoreButton />
    </section>
  );
};

export default CamperList;
