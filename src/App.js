import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { IsMobileContext } from './context';

import { HomePage } from './pages/home';
import { ShopPage } from './pages/shop';
import { SavePage } from './pages/save';
import { ProductPage } from './pages/product';

import './App.css';


function App() {
  const isMobile = window.innerWidth < 576;
  return (
    <IsMobileContext.Provider value={isMobile}>
      <div className="App">
        <Header />
        <main className="content">
          <Switch>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route path="/save">
              <SavePage />
            </Route>
            <Route path="/how-to-install">how-to-install</Route>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route exec path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </IsMobileContext.Provider>
  );
}

export default App;
