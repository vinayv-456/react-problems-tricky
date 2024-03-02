const createEventManager = () => {
  const eventList = new Map();
  return {
    on(event, handler) {
      eventList.has(event)
        ? eventList.get(event)?.add(handler)
        : eventList.set(event, new Set([handler]));
      return this;
    },
    off(event, handler) {
      eventList.has(event) && eventList.get(event)?.delete(handler);
      return this;
    },
    emit(event, args) {
      eventList.has(event) &&
        eventList.get(event)?.forEach((handler) => {
          handler(args);
        });
      return this;
    },
  };
};

export const eventManager = createEventManager();
