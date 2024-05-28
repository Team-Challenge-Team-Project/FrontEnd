import { Outlet } from 'react-router-dom'
import { Header } from './header/header'
import { Footer } from './footer/footer'
import { Filter } from './filter/filter'

export const Root = () => {
  return (
    <div className='app'>
      <Filter />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
