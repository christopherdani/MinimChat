import Button from './Components/Button'
import Header from './Components/Header'

export const App = () => {
  return (
    <div className='container'>
      <Header title='MinimChat' />
      <Button buttonName='Send' color='green' />
    </div>
  )
}

export default App;
