import React from 'react';
import T from 'prop-types';
import s from './Home.module.scss';
import { Header } from '../../components';
import { SearchBar } from '../../components';
import {Switch, Route} from 'react-router-dom';
import { routes } from '../Router';
import LatestList from '../LatestList/LatestListContainer';

export default function Home() {
  return (
    <div className={s.container}>
      <Header>
        <SearchBar />
      </Header>

      <Switch>
        <Route path={routes.home} component={LatestList} exact />
      </Switch>
    </div>
);
}

Home.propTypes ={

};
