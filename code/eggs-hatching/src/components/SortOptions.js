import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './SortOptions.css'
import { useNavigate } from 'react-router-dom';


const SortOptions = () => {
  
  const [graphDisplay, setGraph] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Perform search based on selected options
    // You can use the batch, coordinator, code, and courseName values for your search logic
    if (graphDisplay) {
        
       navigate(`#${graphDisplay}`);
    }
    console.log('Show Graph',graphDisplay);
  };

  return (
    <div className='container mt-4'>
      {/* <h5>Search course</h5> */}
      <Form>
        <Row>
          
          <Col>
            <Form.Group controlId="graphtype">
              <Form.Label>Analyzing Graphs:</Form.Label>
              <Form.Control
                as="select"
                value={graphDisplay}
                onChange={(e) => setGraph(e.target.value)}
              >
                <option value="--">Select Graph</option>
                <option value="rejected_eggs">Rejected eggs</option>
                <option value="broken_eggs">Broken eggs</option>
                <option value="double_yolk_eggs">Double yolk eggs</option>
                {/* Add more options as needed */}
              </Form.Control>
            </Form.Group>
          </Col>
          
          
          <Col className="mb-3">
            <Button onClick={handleSearch} style={{ marginTop: '30px' }}>Show Graph</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SortOptions;
