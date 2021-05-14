import { connect } from 'umi';
import { Form, Input, Button, Radio } from 'antd';

function Page(props) {
  const [form] = Form.useForm();
  console.log('props', props);
  const [goods] = props;
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item label="Required Mark" name="requiredMarkValue">
          <Radio.Group>
            <Radio.Button value="optional">Optional</Radio.Button>
            <Radio.Button value>Required</Radio.Button>
            <Radio.Button value={false}>Hidden</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
}

// function Node(props){
//     const [imgSrc,title,price,num] = props

//     return (
//         <div className='item'>
//             <img src={imgSrc}  />
//             <div>
//                 <div>{title}</div>
//                 <span></span>
//             </div>
//         </div>
//     )
// }

const mapPropsState = ({ cart }) => {
  return { ...cart };
};

export default connect(mapPropsState)(Page);
