import { createForm } from 'rc-form';
import { InputItem, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  const { getFieldProps, getFieldsError, getFieldsValue } = props.form;
  const submit = () => {
    let errors = getFieldsError();
    for (let key in errors) {
      let value = errors[key];
      if (value) {
        Toast.info(value, 2);
        return;
      }
    }

    let value = getFieldsValue();
    handleSubmit(value);
  };

  const validateTel = (rule, value, callback) => {
    if (value && value.length === 11) {
      callback();
    } else if (value.length === 0) {
      callback(new Error('请输入电话号码'));
    } else {
      callback(new Error('电话号码不合法'));
    }
  };

  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('name', {
          rules: [{ validator: validateTel }],
        })}
        type="number"
        placeholder="请输入电话"
        clear
      >
        账号
      </InputItem>
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('password')}
        type="password"
        placeholder="请输入密码"
        clear
        autoComplete="new-password"
      >
        密码
      </InputItem>
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={submit}>
        登录
      </Button>
    </WingBlank>
  );
};

export default createForm()(LoginForm);
