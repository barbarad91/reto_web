import { Switch, Route } from 'react-router-dom'
import PhoneDetails from '../pages/PhoneDetails/PhoneDetails'
import PhonesList from '../pages/PhonesList/PhonesList'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact children={<PhonesList />}></Route>
      <Route path="/details/:id" children={<PhoneDetails />}></Route>
    </Switch>
  )
}
export default Routes
