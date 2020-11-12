import { WEBSOCKET_CLOSED, WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT, WEBSOCKET_MESSAGE, WEBSOCKET_OPEN, WEBSOCKET_SEND } from './actionTypes';
declare type Serializer = (payload: any) => string | ArrayBuffer | ArrayBufferView | Blob;
declare type ActionType = typeof WEBSOCKET_CLOSED | typeof WEBSOCKET_CONNECT | typeof WEBSOCKET_DISCONNECT | typeof WEBSOCKET_MESSAGE | typeof WEBSOCKET_OPEN | typeof WEBSOCKET_SEND;
declare type Action = {
    type: typeof WEBSOCKET_CLOSED;
    payload: any;
    meta?: any;
} | {
    type: typeof WEBSOCKET_CONNECT;
    payload: any;
    meta?: any;
} | {
    type: typeof WEBSOCKET_DISCONNECT;
    payload: any;
    meta?: any;
} | {
    type: typeof WEBSOCKET_MESSAGE;
    payload: any;
    meta?: any;
} | {
    type: typeof WEBSOCKET_OPEN;
    payload: any;
    meta?: any;
} | {
    type: typeof WEBSOCKET_SEND;
    payload: any;
    meta?: any;
};
declare type Options = {
    onOpen?: (s: WebSocket) => void;
    prefix?: string;
    reconnectInterval?: number;
    reconnectOnClose?: boolean;
    dateSerializer?: (date: Date) => string | number;
    serializer?: Serializer;
};
export { Action, ActionType, Options, Serializer };
