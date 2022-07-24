import React from 'react';
//Components
import EventCard from '../eventCard/EventCard';
//Types
import { marketID, selectionID } from '../../types';

const MarketSection: React.FC<marketID> = ({ event_id, id, name, selections }) => {

  const areButttonsDisabled = React.useMemo(
    () =>
      false
    ,
    [selections],
  );
  return (
    <div className=''>
      <h1>{name}</h1>
      {selections !== undefined && selections.map((selected: selectionID) =>
        <EventCard key={selected.id} event_id={event_id} market_id={id} id={selected.id} name={selected.name} price={selected.price} isAposted={selected.isAposted} isDisabled={areButttonsDisabled} />
      )
      }
    </div>);
};

export default MarketSection;