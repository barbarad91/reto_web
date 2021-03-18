import { Switch, Route, Redirect } from 'react-router-dom'
import BeersList from '../pages/Beers/BeersList'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <BeersList />}></Route>
    </Switch>
  )
}
export default Routes
