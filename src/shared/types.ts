export interface bet {
    id: string,
    name: string,
    percent: number
}
export interface eventList {
    id: string,
    name: string,
    markets: marketBet[],
}
export interface marketBet {
    id: string,
    name: string,
    selections: selectionBet[],
}

export interface selectionBet {
    id: string,
    name: string,
    isAposted: boolean,
    price: string,
}

export interface selection {
    id: string;
    market_id: string;
    event_id: string;
    name: string;
    price: number;
    isAposted?: boolean;
    isDisabled?: boolean;
}

// ID types

export interface marketBetID {
    id: string,
    name: string,
    selections: selectionID[],
}

export interface marketID {
    id: string;
    name?:string;
    selections: selectionID[];
    event_id: string;
}
export interface eventListId {
    id: string,
    name: string,
    markets: marketBetID[],
}
export interface selectionID {
    id: string;
    name: string;
    price: number;
    isAposted?: boolean;
    isDisabled?: boolean;
}