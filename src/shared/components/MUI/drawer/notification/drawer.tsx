import React from "react";
//Components
import Drawer from "@mui/material/Drawer";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
//Events
import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { deleteBet } from '../../../../reducers/bet.reducer';
import { updateEvent } from "../../../../reducers/event.reducer";



const BetDrawer: React.FC = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const allEvents = useSelector(
        (state: any) => state.bets,
        shallowEqual,
    );
    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
            {allEvents.map((item: any, index: number) => (
                <ListItem button key={index}>
                    <ListItemText primary={item.name} />
                    <ListItemText primary={item.price} />
                    <Button onClick={() => {
                        dispatch(deleteBet(item))
                        dispatch(updateEvent(item))
                    }
                    }>Delete Bet</Button>
                </ListItem>
            ))}
        </div>
    );
    return (
        <div>
            <Drawer
                open={open}
                anchor={"left"}
                onClose={() => setOpen(false)}
            >
                {getList()}
            </Drawer>
            <Button onClick={() => setOpen(!open)}>Click me</Button>
        </div>
    );
}

export default BetDrawer;