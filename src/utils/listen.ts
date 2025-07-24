import { useEffect } from 'react';

interface NuiMessage<T = unknown> {
   action: string;
   infos: T;
   data: T;
   payload: T;
}

type NuiEventHandler<T = any> = (data: T) => void;

const eventListeners = new Map<string, NuiEventHandler[]>();

const eventListener = (event: MessageEvent<NuiMessage>) => {
   const { action, payload, infos, data } = event.data;
   const handlers = eventListeners.get(action);
   if (handlers) {
      handlers.forEach((handler) => handler(payload || infos || data));
   }
};

window.addEventListener('message', eventListener);

export const listen = <T = unknown>(action: string, handler: NuiEventHandler<T>) => {
   const handlers = eventListeners.get(action) || [];
   handlers.push(handler);
   eventListeners.set(action, handlers);

   useEffect(() => {
      const handlers = eventListeners.get(action) || [];
      eventListeners.set(
         action,
         handlers.filter((h) => h !== handler)
      );
   }, []);
};