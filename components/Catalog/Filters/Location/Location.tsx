"use client";

import { FC, useState, useRef, useEffect } from "react";
import { LocationProps } from "@/types/filters";
import styles from "./Location.module.css";

const Location: FC<LocationProps> = ({ filters, setFilters, locations }) => {
  const [inputValue, setInputValue] = useState(
    filters.location || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredLocations = locations.filter((city) =>
    city.toLowerCase().includes(
      inputValue.replace(", Ukraine", "").toLowerCase()
    )
  );

  const handleSelect = (city: string) => {
    const value = `${city}, Ukraine`; 
    setInputValue(value);
    setFilters((prev) => ({ ...prev, location: value }));
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredLocations.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredLocations.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredLocations.length) {
        handleSelect(filteredLocations[highlightedIndex]);
      }
    }
  };

  const isCitySelected = inputValue.includes(", Ukraine");

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <h4 className={styles.title}>Location</h4>

      <div className={styles.inputWrapper}>
        <svg
          className={`${styles.icon} ${isCitySelected ? styles.iconActive : ""}`}
        >
          <use href="/sprite.svg#icon-Map" />
        </svg>

        <input
          type="text"
          className={styles.input}
          placeholder="City"
          value={inputValue}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      {isOpen && filteredLocations.length > 0 && (
        <ul className={styles.options}>
          {filteredLocations.map((city, index) => (
            <li
              key={city}
              onClick={() => handleSelect(city)}
              className={index === highlightedIndex ? styles.highlighted : undefined}
            >
              {city} {}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Location;
