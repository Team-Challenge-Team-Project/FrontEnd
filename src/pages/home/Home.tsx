import './Home.styled.css'

export const Home = () => {
  return <div className='main'>
    <section className='main-board'>
      <div className='main-board__count'></div>
      <div className='main-board__button-count'>
        <button className='main-board__button'>Shop for Her</button>
        <button className='main-board__button'>Shop for Him</button>
      </div>
    </section>
  </div>


}
