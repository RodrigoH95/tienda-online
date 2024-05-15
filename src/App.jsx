import { Route, Switch, useLocation } from 'wouter'
import './App.css'
import { ProductsPage } from './pages/products-page'
import { ProductDetail } from './pages/product-detail'
import { NotFound } from './pages/not-found';

function App() {

  const [_, navigate] = useLocation();

  const toggleMenu = () => {
    const navBar = document.querySelector('.nav-links');
    navBar.classList.toggle('active');
    document.body.classList.toggle('block-scroll');
  }

  return (
    <>
      <header className='header'>
        <div className="logo" onClick={() => navigate('/')}>
          <img className='logo-image' src="./shop-stock.png" alt="logo del sitio de e-commerce shop stock" />
        </div>
        <nav className='nav-bar'>
          <div className="hamburger" onClick={() => toggleMenu()}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className='nav-links'>
            <li className='nav-link'><a onClick={() => navigate('/')}>Home</a></li>
            <li className='nav-link'><a onClick={() => navigate('/')}>Products</a></li>
            <li className='nav-link'>About</li>
            <li className='nav-link'>Contact</li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <Switch>
          <Route path='/products/:id' component={ProductDetail} />
          <Route path='/404' component={NotFound} />
          <Route path='/' component={ProductsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className='footer'>
        <p>Shop Stock - 2024</p>
      </footer>
    </>
  )
}

export default App
