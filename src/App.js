import React, { Component } from 'react';
import QRCode from './components/QR_Code';
import QrCodeGenerate from './components/QrCodeGenerate';


 class App extends Component {
   
  render() {
    return (
        <div style={{marginLeft:'40px',marginTop:'50px'}}>
          <QrCodeGenerate/>
          <QRCode />
        </div>
    )
  }
}

export default App


