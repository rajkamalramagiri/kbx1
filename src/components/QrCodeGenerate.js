import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QrCodeGenerate() {

  const [merch_order_id, set_merch_order_id] = useState(['0101234123456789012'])
  const [total_amount, set_total_amount] = useState(['4'])

  const data={
    Request: {
      "Request": {
        "timestamp": "1604315508",
        "method": "kbz.payment.precreate",
        "notify_url": "http://www.sunny.com.mm/notify",
        "nonce_str": "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
        "sign_type": "SHA256",
        "sign": "BAEFF7FCA3D9177324C6884614C1DD6D22E1ABE054B835731FF700BB8348AE65",
        "version": "1.0",
        "biz_content": {
          "merch_order_id": "0101234123456789089",
          "merch_code": "200050",
          "appid": "kp3b4633646f9a4055a51169c21d35ce",
          "trade_type": "PAY_BY_QRCODE",
          "title": "iPhoneX",
          "total_amount": "500000",
          "trans_currency": "MMK"
        }
      }
    }
  }
  const onPay = () => {
      axios.post(
        "http://api.kbzpay.com/payment/gateway/uat/precreate",{data},
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "*",
          },
        },
      )
        .then(res => {
            console.log('++response',res)
        })
        .catch(err => {
          console.log(err.response);
        })
  
  }

  return (
    <div>
    {console.log('++data',data)}

      <label>Enter order id</label>
      <input type='text' value={merch_order_id} 
      onChange={e=>set_merch_order_id(e.target.value)}
      placeholder='Enter order id'
      
      /><br/>

    <label>Enter total amount</label>
      <input type='text' value={total_amount} 
      onChange={e=>set_total_amount(e.target.value)}
      placeholder='Total amount'
      
      />
  <br/>
      <button onClick={onPay}>Pay</button>
    </div>
  )
}

export default QrCodeGenerate
