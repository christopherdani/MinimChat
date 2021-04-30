import Button from './Components/Button'
import ChatBox from './Components/ChatBox';
import Header from './Components/Header'

export const App = () => {
  return (
    <div className='container'>
      <Header title='Chad' />
      <ChatBox />
    </div>
  )
}

export default App;
