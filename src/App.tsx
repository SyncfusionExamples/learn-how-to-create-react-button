import React from 'react';
import './App.css';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';

function App() {
  const ChangeBtnText = (args:any) => {
    if(args.target.classList.contains('e-active'))
      args.target.textContent = "Pause"
    else
      args.target.textContent = "Play"
  }
  return (
    <div>
      <ButtonComponent cssClass="e-outline"
                       isToggle={true}
                       onClick={ChangeBtnText}
                       // To set icon to the button
                      //  iconCss="e-play-icon"  
                      //  iconPosition="Right"
                       //To disable the button
                       //  disabled={true} 
                       >Play</ButtonComponent>
    </div>
  );
}

export default App;
