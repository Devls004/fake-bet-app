// import logo from './logo.svg';
import './App.css';
//Events
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { eventGetter } from './shared/actions/event.action';
import { initEvent } from './shared/reducers/event.reducer';
//Components
import MarketSection from './shared/components/marketSection';
import BetDrawer from './shared/components/MUI/drawer/drawer';
//Types
import {eventListId} from './shared/types'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() =>{
    eventGetter().then(events => dispatch(initEvent(events)))
  }, [dispatch])
  
  const allEvents = useSelector(
    (state:any) => state.events,
  )

  return (
    <div className="App">
      <BetDrawer></BetDrawer>
      <header className="App-header">
        {allEvents.map((event:any) => (
          <div key={event.id}>
            <p>{event.name}</p>
              {event.markets.map((market:any)=> (
                <div key={market.id}>
                  <MarketSection event_id={event.id} id={market.id} name={market.name} selections={market.selections}/>
                </div>
            ))}
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;