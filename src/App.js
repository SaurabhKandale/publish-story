import './App.css';
import { SecondaryA } from './Components/Button/Button.stories';
import {Large} from './Components/Input/InputComp.stories'
import './Components/Button/button.css'

function App() {
  return (
    <div className="App">
      <SecondaryA varient={'secondary'} children={'Secondary Button'} />
      <Large size={'large'} placeholder={'Large Input'} />
    </div>
  );
}

export default App;
