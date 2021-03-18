import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';

import { HomePage } from './pages/home';
import { ShopPage } from './pages/shop';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Switch>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/save">Save</Route>
          <Route path="/how-to-install">how-to-install</Route>
          <Route path="/cart">Cart</Route>
          <Route exec path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
