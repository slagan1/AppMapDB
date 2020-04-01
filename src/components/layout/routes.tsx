import * as React from 'react';
import { Route, Switch } from 'react-router';
import RatingProcess from '../pages/RatingProcess';
import RateNewApp from '../pages/RateNewApp';
import Apps from '../pages/Apps';
import { publicUrl } from '../../helpers';
import PlayGround from './PlayGround';
import Home from '../pages/Home';
import Framework from '../pages/Framework';

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={Home} />
    <Route exact path={publicUrl('/')} component={Home} />
    <Route exact path={publicUrl('/Framework')} component={Framework} />
    <Route exact path={publicUrl('/Apps')} component={Apps} />
    <Route exact path={publicUrl('/Rating')} component={RatingProcess} />
    <Route exact path={publicUrl('/RateNewApp')} component={RateNewApp} />
    <Route exact path={publicUrl('/PlayGround')} component={PlayGround} />
  </Switch>
);

export default Routes;
