import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Button } from "react-bootstrap";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import NavBar from './NavBar';
import SortOptions from './SortOptions';
import MultiLineRejected from './MultiLineRejected';
import MultiLineDoubleYolk from './MultiLineDoubleYolk';




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
          <SortOptions/>

          <nav>
        <ul>
          <li>
            <a href="#rejected_eggs">Rejected Eggs</a>
          </li>
          <li>
            <a href="#double_yolk_eggs">Double Yolk Eggs</a>
          </li>
          
        </ul>
      </nav>
          
          <div id="rejected_eggs">
            <MultiLineRejected/>
          </div>

          <div id="double_yolk_eggs">
            <MultiLineDoubleYolk/>
          </div>
          
          
            
      </div>
    )
}

