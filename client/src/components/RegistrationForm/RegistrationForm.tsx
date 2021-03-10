import React, {useEffect, useState} from 'react'
import {
    Form,
    Input,
    Tooltip,
    Button, message
} from 'antd'
import {QuestionCircleOutlined} from '@ant-design/icons'
import './RegistrationForm.css'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import {authRegister, cleanRegisterMessage, cleanRegistrationForm, registrationFormChange} from '../../redux/authReducer'
import { setIsModalVisible } from '../../redux/appReducer'


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 8
        }
    },
    wrapperCol: {
        xs: {
            span: 24
        },
        sm: {
            span: 16
        }
    }
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0
        },
        sm: {
            span: 16,
            offset: 8
        }
    }
}
export const RegistrationForm = () => {
    const [CustomForm] = Form.useForm()
    const dispatch = useDispatch()
    const registrationForm = useSelector((state: RootStateType) => state.auth.registrationForm)
    const registerMessage = useSelector((state: RootStateType) => state.auth.registerMessage)
    const isRegistered = useSelector((state: RootStateType) => state.auth.isRegistered)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationFormChange({[event.target.name]: event.target.value}))
        dispatch(cleanRegisterMessage())
    }
    const registerHandler = async () => {
        await dispatch(authRegister(registrationForm))



    }
    useEffect(() => {
        if(isRegistered){
            dispatch(cleanRegistrationForm())
            dispatch(setIsModalVisible(false))
            message.success(registerMessage)
            dispatch(cleanRegisterMessage())
        } else {
            registerMessage && message.error(registerMessage)
            dispatch(cleanRegisterMessage())
        }
    }, [isRegistered, dispatch, registerMessage])


    return (
        <>
            <Form

                {...formItemLayout}
                form={CustomForm}
                name="register"
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!'
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!'
                        }
                    ]}
                >
                    <Input
                        name="email"
                        value={registrationForm.email}
                        onChange={changeHandler}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        name="password"
                        value={registrationForm.password}
                        onChange={changeHandler}
                    />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!'
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }

                                return Promise.reject('The two passwords that you entered do not match!')
                            }
                        })
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="name"
                    label={
                        <span>
          Name&nbsp;
                            <Tooltip title="What do you want others to call you?">
            <QuestionCircleOutlined/>
          </Tooltip>
        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                            whitespace: true
                        }
                    ]}
                >
                    <Input
                        name="name"
                        value={registrationForm.name}
                        onChange={changeHandler}
                    />
                </Form.Item>
                {/*<div className='uploadWrapper'>*/}
                {/*    <FileUploader/>*/}

                {/*</div>*/}
                <br/>
                <Form.Item {...tailFormItemLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{width: 150}}
                        onClick={registerHandler}
                    >
                        Register
                    </Button>
                </Form.Item>


            </Form>

        </>
    )

}