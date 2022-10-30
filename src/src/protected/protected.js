import React from 'react'
import { Route , Redirect } from 'react-router-dom';

const Protected = (props) => {
 if(props.isLogin){
    return <Route exact path={props.path} component={props.component}/>
 }else{
    return <Redirect to='/'/>
 }
}

export default Protected; 
