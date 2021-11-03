import { Switch, Route } from 'react-router-dom';
import Brazil from '../views/Brazil';
import DateSpecified from '../views/DateSpecified';
import OtherCountry from '../views/OtherCountry';
import Form from '../views/Form';

// Componente que define onde apareceram os
// components de acordo com o hash
const Main = () => {
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
