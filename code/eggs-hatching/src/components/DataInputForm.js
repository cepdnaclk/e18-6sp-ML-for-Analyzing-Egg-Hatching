import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Row,
  Col,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};




const DataInputForm = () => {

  const [form] = Form.useForm();
  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      // Send data to your API endpoint using Axios or another HTTP library
      const response = await axios.post('http://localhost:5000/predict', values);
      console.log('Data sent successfully:', response.data);
      setResponseData(response.data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      
      <Form form={form}
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        
        <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="Age" label="Age">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="Mortality male" label="Mortality-Male">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="Mortality female" label="Mortality-Female">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="sex ratio" label="Sex-Ratio">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="Total Eggs" label="Total-Eggs">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="Egg Weight" label="Egg-Weight">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="Feed male" label="Feed-Male">
            <InputNumber />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="Feed female" label="Feed-Female">
            <InputNumber />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} className="text-center">
          <Form.Item label="">
            <Button type="primary" onClick={handleSubmit}>
              Predict
            </Button>
          </Form.Item>
        </Col>
      </Row>
        
        
        {/* <Form.Item label="" className='pl-4'>
          <Button type="primary" onClick={handleSubmit}>
            Predict
          </Button>
        </Form.Item> */}
        
      </Form>
      <div>
      {responseData && (
        <div>
          <h4>Prediction:</h4>
          <h3><pre>{JSON.stringify(responseData.prediction, null, 2)}</pre></h3>
        </div>
      )}
      </div>
    </>
  );
};
export default () => <DataInputForm />;