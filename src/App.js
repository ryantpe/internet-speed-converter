import './App.css';
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
            <div className="unit-control">
                <div className="unit">Mbps</div>
                <span className="exchange-icon fa-fw fa-stack">
                    <i className="far fa-circle fa-stack-2x"></i>
                    <i className="fas fa-exchange-alt fa-stack-1x"></i>
                </span>
                <div className="unit">MB/s</div>
            </div>
            <div className="converter">
              <div className="flex-1">
                <div className="convert-title">Set</div>
                <input type="number" className="input-number" min="0" onChange={handleInputChange} />
              </div>
              <span className="angle-icon fa-2x" style={{marginTop: "30px"}}>
                <i className='fas fa-angle-right'></i>
              </span>
              <div className='text-right flex-1'>
                <div className='convert-title'>Show</div>
                <input type='text' className='input-number text-right' value={inputValue} disable />
              </div>
            </div>
        </div>
        <div className="card-footer">FAST</div>
    </div>  );
}

export default App;
