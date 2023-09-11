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

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      // Send data to your API endpoint using Axios or another HTTP library
      const response = await axios.post('http://localhost:5000/predict', values);
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      
      <Form form={form}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        
        <Form.Item name="Age" label="Age">
          <InputNumber />
        </Form.Item>
        <Form.Item name="Mortality male" label="Mortality-Male">
          <InputNumber />
        </Form.Item>
        <Form.Item name="Mortality female" label="Mortality-Female">
          <InputNumber />
        </Form.Item>
        <Form.Item name="sex ratio" label="Sex-Ratio">
          <InputNumber />
        </Form.Item>
        <Form.Item name="Total Eggs" label="Total-Eggs">
          <InputNumber />
        </Form.Item>
        <Form.Item name="Egg Weight" label="Egg-Weight">
          <InputNumber />
        </Form.Item>
        <Form.Item name="Feed male" label="Feed-Male">
          <InputNumber />
        </Form.Item>
        <Form.Item name="Feed female" label="Feed-Female">
          <InputNumber />
        </Form.Item>
        
        
        <Form.Item label="" className='pl-4'>
          <Button type="primary" onClick={handleSubmit}>
            Predict
          </Button>
        </Form.Item>
        
      </Form>
    </>
  );
};
export default () => <DataInputForm />;