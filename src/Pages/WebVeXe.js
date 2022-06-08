import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../Component/Menu';
import Navba from '../componnet/Navba';
import FooterMain from '../Component/footer/footerMain';
export default function WebVeXe() {
  const {id} = useParams();

  return (

  <>
    <div>
      <Menu />
      <Navba></Navba>
    </div>
    <div>
      <h1>{id}</h1>
    </div>
    <div>
      <FooterMain />
    </div>
  </>
  )
}
