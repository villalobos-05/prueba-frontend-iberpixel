import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './contexts/cart.tsx'
import Header from './components/Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <Header />
    <App />
  </CartProvider>
)
