import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import NavBar from './NavBar';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




if (firebase.apps.length === 0) {
  // Initialize Firebase
  const app = firebase.initializeApp({
    // Your Firebase configuration
  });
}

// Initialize Firestore
const firestore = firebase.firestore();


  
export default function Dashboard() {
   
    return (
        
    <div className='content'>
    
        <NavBar/>
            
            
           
        </div>
    )
}

