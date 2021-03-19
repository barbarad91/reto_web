import { Switch, Route } from 'react-router-dom'
import PhonesList from '../pages/Phones/PhonesList'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <PhonesList />}></Route>
    </Switch>
  )
}
export default Routes
