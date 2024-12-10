import { View, Text } from 'react-native'
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface TimerContext {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContext>({
  duration: 10,
  setDuration: () => {},
});

interface TimerProviderProps {
  children: ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(10);
  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;
