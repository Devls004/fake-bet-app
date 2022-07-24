//Main
import React from 'react';
//Events
import { addBet } from '../../reducers/bet.reducer';
import { updateEvent } from '../../reducers/event.reducer';
import { useDispatch } from 'react-redux';
//Types
import { selection } from '../../types'
//Styles
import styles from './event.module.scss';

const EventCard: React.FC<selection> = ({ event_id, market_id, id, name, price, isAposted, isDisabled }) => {
  const dispatch = useDispatch()
  const addBetForm = (event: any) => {
    event.preventDefault()
    const { target } = event
    const content: selection = {
      name: target.name.value,
      price: target.price.value,
      id: target.id.value,
      market_id: target.market_id.value,
      event_id: target.event_id.value,
    }
    dispatch(addBet(content))
    dispatch(updateEvent(content))
  }
  return (
    <form onSubmit={addBetForm}>
      <input type="hidden" name="name" value={name} />
      <input type="hidden" name="price" value={price} />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="market_id" value={market_id} />
      <input type="hidden" name="event_id" value={event_id} />
      <button
        disabled={isAposted || isDisabled}
        className={`${isAposted ? styles.btnAposted : styles.btn}`}
      >
        <p>{name}</p>
        <p>{price}</p>
      </button>
    </form>
  );
};

export default EventCard;