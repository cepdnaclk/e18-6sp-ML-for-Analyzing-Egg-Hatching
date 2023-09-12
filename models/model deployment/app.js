const express = require('express');
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const Data = require("./database/data");
const db = require("./database/db");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// create/ connect with the database
db.connect();

app.use(bodyParser.json());

function extractNumberFromHex(hexString) {
    // Convert the hexadecimal values to ASCII characters
    const asciiString = Buffer.from(hexString, 'hex').toString('ascii');
  
    // Use regular expressions to extract the numeric part (e.g., 3343.0)
    const numericMatch = asciiString.match(/\d+\.\d+/);
  
    if (numericMatch) {
      // Convert the matched string to a number
      const numericValue = parseFloat(numericMatch[0]);
      return numericValue;
    } else {
      // Return null or handle the case where no numeric part is found
      return null;
    }
  }

  const corsOptions = {
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204,
      };
      
      app.use(cors(corsOptions)); // Enable CORS for your app

app.post('/predict', (req, res) => {
    const inputData = req.body;

    const newData = new Data({
                
            total_eggs : inputData["Total Eggs"],
            sex_ratio : inputData["sex ratio"],
            age : inputData["Age"],
            feed_female : inputData["Feed female"],
            feed_male : inputData["Feed male"],
            mortality_male : inputData["Mortality male"],
            mortality_female : inputData["Mortality female"],     
            egg_weight : inputData["Egg Weight"]
              
          });

        // const data = await newData.save();    
  
    const pythonProcess = spawn('python', ['predict.py', JSON.stringify(inputData)]);

  
    let prediction = 0;
    let errorMessage = ''; 
  
    pythonProcess.stdout.on('data', (data) => {
      prediction = extractNumberFromHex(data); 
      newData.prediction = prediction;
      newData.save();
      
    });
  
    pythonProcess.stderr.on('data', (data) => {
      errorMessage += data; 
    });
  
    pythonProcess.on('close', (code) => {
      console.log(`Python script exited with code ${code}`);
  
      if (code === 0) {
        // If the Python script exits with code 0, it's considered a success

        res.json({ prediction: prediction });
      } else {
        // If the Python script exits with a non-zero code, there was an error
        console.error(`Python stderr: ${errorMessage}`);
        res.status(500).json({ error: 'An error occurred while running the Python script.' });
      }
    });
});

app.get('/test-data', async (req, res) => {
  try {
    // Access the "datas" collection from your MongoDB database
    const data = await mongoose.connection.db.collection('datas').find({}).toArray();

    // Send the retrieved data as a JSON response
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
