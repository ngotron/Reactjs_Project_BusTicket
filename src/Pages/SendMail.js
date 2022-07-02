import { price } from '../Core/GlobalNumber';
import { useRef } from 'react';

// import axios from 'axios';
const axios = require('axios').default; // npm install axios
const CryptoJS = require('crypto-js'); // npm install crypto-js
const moment = require('moment'); // npm install moment
export  const SendMail = () => {
    const idZAlo = useRef({
        transIDRef:Math.floor(Math.random() * 1000000),
        app_trans_idREf:`${moment().format('YYMMDD')}_${Math.floor(Math.random() * 1000000)}`
    })
    const app_trans_idREf = useRef()
    console.log(app_trans_idREf.current);
    const config = {
        app_id: "2554",
        key1: "sdngKKJmqEMzvh5QQcdD2A9XBSKUNaYn",
        key2: "trMrHtvjo6myautxDUiAcYsVtaeQ8nhf",
        endpoint: "https://sb-openapi.zalopay.vn/v2/create"
    };
    // Node v10.15.3
    // APP INFO
    const SendZalo = ()=>{
  

    const embed_data = {};

    const items = [{}];
    const transID = idZAlo.current.transIDRef ;
    const order = {
    app_id: config.app_id,
    app_trans_id:idZAlo.current.app_trans_idREf, // translation missing: vi.docs.shared.sample_code.comments.app_trans_id
    app_user: "hieu.tran23@student.passerellesnumeriques.org",
    app_time: Date.now(), // miliseconds
    item: JSON.stringify(items),
    embed_data: JSON.stringify(embed_data),
    amount: price,
    callback_url: "http://localhost:8888/callback",
    description: `Lazada - Payment for the order #${transID}`,
    bank_code: "zalopayapp",
};

    const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();
    axios.post(config.endpoint, null, { params: order })
        .then(res => {
            console.log(res.data);
            window.open(res.data.order_url);
        })
        .catch(err => console.log(err));
        }
    const confirm = () =>{
        
        const qs = require('qs');
    
      
    
        let postData = {
            app_id: config.app_id,
            app_trans_id: idZAlo.current.app_trans_idREf, // Input your app_trans_id
        }
    
        let data = postData.app_id + "|" + postData.app_trans_id + "|" + config.key1; // appid|app_trans_id|key1
        postData.mac = CryptoJS.HmacSHA256(data, config.key1).toString();
    
    
        let postConfig = {
            method: 'post',
            url: config.endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify(postData)
        };
    
        axios(postConfig)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const sendEmail = (e) => {
        e.preventDefault();
        // hash();
        SendZalo()
    };
    setInterval(()=>{
        confirm();
    console.log(idZAlo.current.app_trans_idREf);

        console.log("hi anh");
    },60000)

  return (
    <form  onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <br></br>
      <label>Email</label>
      <input type="email" name="to_mail" />
      <br></br>

      <label>Message</label>
      <textarea name="message" />
      <br></br>

      <input type="submit" value="Send" />
    </form>
  );
};