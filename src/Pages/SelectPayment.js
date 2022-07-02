import React, { useState } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { patchAPISeats } from '../Core/API';
import { price } from '../Core/GlobalNumber';
import { useRef } from 'react';
// import axios from 'axios';
const axios = require('axios').default; // npm install axios
const CryptoJS = require('crypto-js'); // npm install crypto-js
const moment = require('moment'); // npm install moment


export default function SelectPayment() {

    const search = useLocation().search;

    var seats = new URLSearchParams(search).get('seat');
    seats = JSON.parse(seats);

    var seat_name = new URLSearchParams(search).get('name');
    seat_name = JSON.parse(seat_name);

    const [select, setSelect] = useState();
    const navigate = useNavigate();

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
    var seat_name = new URLSearchParams(search).get('name');
    seat_name = JSON.parse(seat_name);
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
    amount: price*seats.length,
    callback_url: "http://localhost:8888/callback",
    description: `Thanh toan cho khach hang ghe ${seat_name.toString()}  #${transID}`,
    bank_code: "zalopayapp",
};

    const data = config.app_id + "|" + order.app_trans_id + "|" + order.app_user + "|" + order.amount + "|" + order.app_time + "|" + order.embed_data + "|" + order.item;
    order.mac = CryptoJS.HmacSHA256(data, config.key1).toString();
    axios.post(config.endpoint, null, { params: order })
        .then(res => {
            console.log(res.data);
            window.location.replace(res.data.order_url);
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

    const handleChange = e => {
    const target = e.target;
    if (target.checked) {
        setSelect(target.value);
    }
    };
    const handleSubmit = e => {
        console.log("222");
    e.preventDefault();
    if(select === undefined)   return alert("vui long chon option")
    else {
        seats.map(item=>patchAPISeats(item,{status_s:2,id:item}).then(res=>console.log(res)).catch(err=>console.log(err)))
        if(select ==="cash") return navigate(`/Contact?name=${JSON.stringify(seat_name)}`);
        else  SendZalo();
    };

    };

    setInterval(()=>{
        confirm();
        console.log(idZAlo.current.app_trans_idREf);
    },60000)

    return (
    <div className='container'>
        <Link to="/BookingSeat">Ve trang chon ghe</Link>
        <form onSubmit={handleSubmit}>
        <div>
        <label>
            <input type="radio" value="cash" checked={select === 'cash'} onChange={handleChange} />
            <span> Tien mat</span>
        </label>
        <br></br>
        <label>
            <input type="radio" value="zalo" checked={select === 'zalo'} onChange={handleChange} />
            <span> Vi zalo</span>
        </label>
        </div>
        <button class="btn btn-success">Thanh toan</button>
    </form>
    <br></br>
    </div>
    );
}
