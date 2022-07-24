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
}