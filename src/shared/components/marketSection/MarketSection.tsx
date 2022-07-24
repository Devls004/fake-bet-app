import React from 'react';
//Components
import EventCard from '../eventCard/EventCard';
//Types
import { marketID, selectionID } from '../../types';
//Styles
import styles from "./market.module.scss";

const MarketSection: React.FC<marketID> = ({ event_id, id, name, selections }) => {

  const areButtonsDisabled = () => {
    for(const selection of selections){
      if(selection.isAposted === true ) return true 
    }
    return false
  }

  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <div className={styles.wrapperEventsCard} >
        {selections !== undefined && selections.map((selected: selectionID) =>
          <EventCard key={selected.id} event_id={event_id} market_id={id} id={selected.id} name={selected.name} price={selected.price} isAposted={selected.isAposted} isDisabled={areButtonsDisabled()} />
        )
        }
      </div>
    </div>);
};

export default MarketSection;