import { Outlet } from 'react-router-dom'
import { Header } from './header/header'
import { Footer } from './footer/footer'

export const Root = () => {
  return (
    <div className='app'>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}
