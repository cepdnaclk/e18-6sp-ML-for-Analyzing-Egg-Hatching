import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Button } from "react-bootstrap";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import NavBar from './NavBar';
import SortOptions from './SortOptions';
import MultiLineDoubleYolk from './MultiLineDoubleYolk';
import DataInputForm from './DataInputForm';
import PredictionAndDate from './PredictionAndDate';
import MultiChart from './MultiChart';




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
        
      <div className='row'>
      
          <NavBar/>

          
          <div id="enter_data" className="col-md-5 p-5 align-items-center">
            <DataInputForm/>
          </div>
          <div id="predicted_hatch" className="col-md-7">
            <PredictionAndDate/>
          </div>
          <div id="multi_chart" className='p-5'>
            <MultiChart/>
          </div>
          
          
            
      </div>
    )
}

