// import logo from './logo.svg';
import './App.css';
//Events
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { eventGetter } from './shared/actions/event.action';
import { initEvent } from './shared/reducers/event.reducer';
//Components
import Header from './shared/components/header';
import EventSection from './shared/components/eventSection';
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
      <Header />
      <div className="App-header">
        {allEvents.map((event:eventListId) => (
          <EventSection  key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default App;