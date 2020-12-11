import * as React from 'react';
import { Route, Switch } from 'react-router';
import RatingProcess from '../pages/RatingProcess';
import Apps from '../pages/Apps';
import { publicUrl } from '../../helpers';
import PlayGround from './PlayGround';
import Home from '../pages/Home';
import HomeV2 from '../pages/HomeV2';
import FrameworkQuestions from '../pages/FrameworkQuestions';
import News from '../pages/News';
import RateNewAppIntro from '../pages/RateNewAppIntro';
import RateNewApp from '../pages/RateNewApp';
import VersionComponent from './VersionComponent';
import RateAnApp from '../pages/RateAnApp';

const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={VersionComponent({ V1: Home, V2: HomeV2 })} />
    <Route exact path={publicUrl('/')} component={Home} />
    <Route exact path={publicUrl('/FrameworkQuestions')} component={FrameworkQuestions} />
    <Route exact path={publicUrl('/News')} component={News} />
    <Route exact path={publicUrl('/Apps')} component={Apps} />
    <Route exact path={publicUrl('/Rating')} component={RatingProcess} />
    <Route exact path={publicUrl('/RateNewApp')} component={RateNewApp} />
    <Route exact path={publicUrl('/RateAnApp')} component={RateAnApp} />
    <Route exact path={publicUrl('/RateNewAppIntro')} component={RateNewAppIntro} />
    <Route exact path={publicUrl('/PlayGround')} component={PlayGround} />
  </Switch>
);

export default Routes;
