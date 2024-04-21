import { Input, Form } from 'antd';
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import RegCard from '../component/RegCard';
import { UserContext } from '../providers/UserProvider';

function Register(props) {
  const userData = useContext(UserContext);

  const [t] = useTranslation();
  const [form] = Form.useForm();

  const login = () => {
    form.validateFields()
      .then((values) => {
        userData.login(values);
      }).catch((e) => {
        console.log("🚀 ~ .then ~ e:", e)
      });           
  }
  
  return (
    <RegCard className={props.className} cardClassName='w-full h-full rounded-none flex flex-col flex-wrap justify-center items-center'>
      <div className="text-2xl font-bold mt-8 mb-12 text-gray-900 text-center">
        {t("Log In")}
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
        validateTrigger = "onBlur"
      >
        <Form.Item
          name={[ 'email']}
          rules={[{type: 'email',message:t('Please enter a correct email address')},{ required: true, message: t('Please input your E-mail!') },{max:50,message:t('Please input less than 50 characters')}]}
        >
          <Input 
            size="large" 
            placeholder={t('E-mail address')} 
            prefix={<MailOutlined className="m-2"/> } 
            className=" rounded-lg p-3 bg-gray-200 text-black "
          />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[
            { required: true, message: t('Please input your password!') },
            {min:8,message:t('Please input more than 8 characters')}]}
        >
          <Input.Password 
            size="large" 
            placeholder={t('enter password here')} 
            prefix={<LockOutlined className="m-2"/> }
            className="rounded-lg p-3 bg-gray-200"
          />
        </Form.Item>

        {/*<span className={`${message.style} text-lg`}>{message.val==1?<FcOk className="inline mr-2"/>:message.val==0?<FcCancel className="inline mr-2"/>:null}{message.data}</span>*/}
        <Form.Item className="mt-2">
          <button  onClick={login} type="submit" className="w-full bg-gray-800 text-md font-bold text-white  rounded-lg py-2">
            {t("Log In")}
          </button>
        </Form.Item>
      </Form>

      <div className="text-center flex justify-between">
        <Link to="/forgotpassword" className="myAnchor text-md ml-2">{t("Forgot password?")}</Link>
        <Link to="/register" className="myAnchor text-md ml-2">{t("Register now")}</Link>
      </div>
    </RegCard>
  );
}

export default Register;
