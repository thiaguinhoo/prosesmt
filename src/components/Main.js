import { Switch, Route } from 'react-router-dom';
import Brazil from './Brazil';
import DateSpecified from './DateSpecified';
import OtherCountry from './OtherCountry';
import Form from './Form';

const Main = (props) => {
  
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={ () => <Brazil /> }
        />
        <Route
          path="/date"
          component={ () => <DateSpecified /> }
        />
        <Route
          path="/other-countrys"
          component={ () => <OtherCountry /> }
        />
        <Route
          path="/form"
          component={ () => <Form /> }
        />
      </Switch>
    </main>
  );
  
};

export default Main;
