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
      const response = await axios.post('your_api_endpoint_url', values);
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
        
        <Form.Item name="age" label="Age">
          <InputNumber />
        </Form.Item>
        <Form.Item name="mortality-male" label="Mortality-Male">
          <InputNumber />
        </Form.Item>
        <Form.Item name="mortality-female" label="Mortality-Female">
          <InputNumber />
        </Form.Item>
        <Form.Item name="sex-ratio" label="Sex-Ratio">
          <InputNumber />
        </Form.Item>
        <Form.Item name="total-eggs" label="Total-Eggs">
          <InputNumber />
        </Form.Item>
        <Form.Item name="egg-weight" label="Egg-Weight">
          <InputNumber />
        </Form.Item>
        <Form.Item name="feed-male" label="Feed-Male">
          <InputNumber />
        </Form.Item>
        <Form.Item name="feed-female" label="Feed-Female">
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