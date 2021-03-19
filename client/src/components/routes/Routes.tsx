import { Switch, Route } from 'react-router-dom'
import PhoneDetails from '../pages/Phones/PhoneDetails'
import PhonesList from '../pages/Phones/PhonesList'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact children={<PhonesList />}></Route>
      <Route path="/details/:id" children={<PhoneDetails />}></Route>
    </Switch>
  )
}
export default Routes
