import React,{ useState, createContext } from 'react';
import { Routes, Route, BrowserRouterw, Switch } from 'react-router-dom';
// import { createBrowserRoute, RouteProvider, } from 'react-router-dom';
import Counter from './components/Counter';
import WeatherReport from './components/WeatherReport/WeatherReport';
import ShowUserData from './components/userData/showUserData';
import Header from './components/header/header';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes/PublicRoutes';
import Login from './components/Login/Login';
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
        <Header />
          <BrowserRouterw>
          <Switch>
            <Route path='/' element={<Counter  />} />
            <Route path='/weather' element={<WeatherReport />} />
            <Route path='/showUser' element={<ShowUserData  />} />
            <PublicRoutes restricted={false} path='/login' compoent={<Login  />} />
          </Switch>
          </BrowserRouterw>
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
