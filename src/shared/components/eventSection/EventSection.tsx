import React from "react";
import MarketSection from "../marketSection";
import styles from "./EventSection.module.scss";

const EventSection: React.FC<any> = ({ event }) => {
  if (event?.markets?.length === 0) return null;
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperName}>
        <p>{event.name}</p>
      </div>
      <div className={styles.wrapperMarkets}>
        {event.markets?.map((market: any) => (
          <MarketSection
            key={market.id}
            event_id={event.id}
            id={market.id}
            name={market.name}
            selections={market.selections}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSection;
