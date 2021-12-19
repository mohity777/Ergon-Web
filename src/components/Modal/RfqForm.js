// 


import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { createRfq } from '../../store/actions/rfqActions';

const RfqForm = () => {
const dispatch = useDispatch()

  const onFinish = (values) => {
      dispatch(createRfq(values))
    console.log('Success:', values);

   

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: 'Please input Category'
          },
        ]}
      >
        <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>


      <Form.Item
        label="Sub category"
        name="subCategory"
        rules={[
          {
            required: true,
            message: 'Please input sub Category',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="Rfq title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your Rfq Title',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="desctiprion"
        name="description"
        type="textarea"
        rules={[
          {
            required: true,
            message: 'please write Description',
          },
        ]}
      >
      <Input.TextArea style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="design"
        name="design"
        rules={[
          {
            required: true,
            message: 'Please Provide Design Link',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="quantity"
        name="qty"
        type="number"
        rules={[
          {
            required: true,
            message: 'Please input your quantity ',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="budget"
        name="budget"
        type="number"
        rules={[
          {
            required: true,
            message: 'Please input Budget',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="credit period"
        name="creditPeriod"
        type="number"
        rules={[
          {
            required: true,
            message: 'Please input Credit Period',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="deliveryLocation"
        name="deliveryLocation"
        rules={[
          {
            required: true,
            message: 'Please input your deleviery Location',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="applicationCloseTime"
        name="applicationCloseTime"
        rules={[
          {
            required: true,
            message: 'Please input applicationClosetime',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>

      <Form.Item
        label="note"
        name="note"
        rules={[
          {
            required: true,
            message: 'Please input  note',
          },
        ]}
      >
      <Input style={{height:"3vmax",borderRadius:"10px"}} />
      </Form.Item>
     

      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary"  htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RfqForm;