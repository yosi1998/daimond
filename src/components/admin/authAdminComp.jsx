import React from 'react'
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet } from '../../services/apiServices';

const AuthAdminComp = () => {

    const nav = useNavigate();

    useEffect(() => {
      doApi();
    },[])
  
    const doApi = async() => {
      try {
        const url = API_URL+"/users/checkToken";
        const data = await doApiGet(url);
  
        if(data.role != "admin"){
          alert("You must be admin to be here");
          nav("/admin")
        }
        
      } catch (error) {
        alert("You must logged in again");
        nav("/admin")
      }}
  return (
    <React.Fragment></React.Fragment>
  )
}

export default AuthAdminComp