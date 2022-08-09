import './App.css';
import Button from './components/Button';
import BankIcon from './assets/icons/BankIcon.svg';

function App() {

  const onClick = () => {
    console.log('Clicked....');
  }

  return (
    <div className="App">
      <br />
      <Button onClick={onClick} size='large' type='filled'>Label</Button>
      <Button onClick={onClick} size='medium' type='outline'>Label</Button>
      <Button onClick={onClick} size='small' type='secondaryOutline'>Label</Button>
      <Button onClick={onClick} size='small' type='naked'>Label</Button>
      <Button onClick={onClick} size='small' type='critical'>Label</Button>
      <br/>

      <div>
      <br/>
      <Button.WithIconAndLabel
        onClick={onClick}
        size='large'
        feature={{ icon: BankIcon, label: 'Label' }}
      />
      <Button.WithIconAndLabel
        onClick={onClick}
        size='medium'
        feature={{ icon: BankIcon, label: 'Label' }}
      />
      <Button.WithIconAndLabel
        onClick={onClick}
        size='small'
        feature={{ icon: BankIcon, label: 'Label' }}
      />
      </div>

      <div>
      <br/>
        <Button.IconOnly type='filled' size='large' feature={{ icon: BankIcon }} />
        <Button.IconOnly type='outline' size='medium' feature={{ icon: BankIcon }} />
        <Button.IconOnly type='secondaryOutline' size='small' feature={{ icon: BankIcon }} />
        <Button.IconOnly type='naked' size='small' feature={{ icon: BankIcon }} />
        <Button.IconOnly type='critical' size='small' feature={{ icon: BankIcon }} />
      </div>
    </div>
  );
}

export default App;
