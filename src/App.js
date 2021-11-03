import { useState } from 'react';

import Home from './sections/Home';
import LogIn from './sections/LogIn';
import Navbar from './components/Navbar';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? (
    <div className="container mx-auto">
      <Navbar logOut={() => setLoggedIn(false)} />
      <Home />
    </div>
  ) : (
    <LogIn logIn={() => setLoggedIn(true)} />
  );
};

export default App;
