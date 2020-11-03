import React from 'react'
import QRCode from "react-qr-code";

function QR_Code() {
  return (
        <div style={{marginLeft:'40px',marginTop:'50px'}}>
  <QRCode
    id="1234567"
    value="00020101021202021110500346KBZ0089caa55e4182a4b137f6b37b6acc966d172923346294600062000500732kp3b4633646f9a4055a51169c21d35ce50200006KBZPay0106KBZPay5303MMK5802MM62170813PAY_BY_QRCODE64060002my63049D5A"
    size={290}
    level={"H"}
    includeMargin={true}
  />
</div>
  )
}

export default QR_Code