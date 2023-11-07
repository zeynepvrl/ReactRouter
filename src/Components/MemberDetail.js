import React from 'react'
import { useParams } from 'react-router-dom'

function MemberDetail() {
    /* const params = useParams();
    const memberId=params.memberID; */
    const {memberID} = useParams();   //BURADAKİ İSİM ROUTER DAKİ PARAMETRENİN İSMİ İLE AYNI OLMALI
  return (
    <div>MemberDetail {memberID}</div>
  )
}

export default MemberDetail