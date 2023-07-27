import React,{ useState, createContext } from 'react';
// import { createBrowserRoute, RouteProvider, } from 'react-router-dom';
import Counter from './components/Counter';
import WeatherReport from './components/WeatherReport/WeatherReport';
import ShowUserData from './components/userData/showUserData';
function App() {
  const [count, setValue] = useState(0);
  const [themeValue, setThemeValue] = useState("#eee");
  const counterBox = {
    count: count,
    themeValue: themeValue,
    addCount: () => {
      setValue(count+1)
    },
    deleteCount: () => {
      setValue(count-1)
    },
    addAmountCount: (amount:number) => {
        setValue(oldCount=>{
        return oldCount + amount;
      })
    },
    getTheme: (theme:string) => {
      setThemeValue(theme)
    }
}

  return (
    <CounterContext.Provider value={counterBox}>
      <Counter  />
      <WeatherReport />
      <ShowUserData />
    </CounterContext.Provider>
  );
}
const initialState = {
  count: 0,
  themeValue: '#eee',
  addCount: () => {},
  deleteCount: () => {},
  addAmountCount: (val:number) => {},
  getTheme: (val:string) => {},
}
export const CounterContext = createContext(initialState);
export default App;
