import './App.css';
import Button from './components/Button';

function App() {

  const onClick = () => {
    console.log('Clicked....');
  }

  return (
    <div className="App">
      <Button
        onClick={onClick}
        // disabled
      >Normal Button</Button>

      <br/>

      <Button.WithIcon
        onClick={onClick}
        // disabled
        feature={{
          icon: 'test-icon',
          label: 'test-label'
        }}
      />
    </div>
  );
}

export default App;
