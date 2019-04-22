import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar'
import * as ROUTES from '../../constants/routes';

class NavBuild extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
         <NavBar />   
        )
    }
}

export default NavBuild