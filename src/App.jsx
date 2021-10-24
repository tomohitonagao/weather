import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { AppBar } from '@mui/material';
import dayjs from 'dayjs';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WeatherPage from './Component/WeatherPage/WeatherPage';
import Menu from './Component/Menu/menu';

function App() {
  return (
    <BrowserRouter>
      <AppBar>{dayjs().format('MM月DD日')}</AppBar>
      <Grid style={{ marginTop: 100 }}>
        <Menu />
      </Grid>
      <Switch>
        <Route path="/:cityName">
          <WeatherPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
