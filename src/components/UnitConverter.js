import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UnitConverter = ({inputValue, handleInputChange})=>{
    return (
        <div className="converter">
        <div className="flex-1">
          <div className="convert-title">Set</div>
          <input type="number" className="input-number" min="0" onChange={handleInputChange} />
        </div>
        <span className="angle-icon fa-2x" style={{marginTop: "30px"}}>
          <FontAwesomeIcon icon={['fas', 'angle-right']} />
        </span>
        <div className='text-right flex-1'>
          <div className='convert-title'>Show</div>
          <input type='text' className='input-number text-right' value={inputValue/8} disable />
        </div>
      </div>        
    );
};

export default UnitConverter;