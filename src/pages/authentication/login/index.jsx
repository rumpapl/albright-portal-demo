import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';


// internal imports
import { FormController } from '../../../components/hoc';
import {
    FormContainer,
    FormImageWrapper,
    FormAuth,
    InputContainer
} from './elements';
import { FaceIcon } from '../../../assets/icons/face';
import {
    OutlinedLabelTextField,
    OutlinedLabelPasswordField
} from '../../../components/material-ui';


const Login = () => {
    const { control, register, } = useForm();
    return (
        <FormContainer>
            <FormImageWrapper>
                <FaceIcon />
            </FormImageWrapper>
            <FormAuth>
                <InputContainer>
                    <FormController
                        name='username'
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please provide Username"
                            },
                        }}
                    >
                        <OutlinedLabelTextField label='Username' />
                    </FormController>
                </InputContainer>
                <InputContainer>
                    <FormController
                        name='password'
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please provide Password"
                            },
                        }}
                    >
                        <OutlinedLabelPasswordField label='Password' />
                    </FormController>
                </InputContainer>
            </FormAuth>
        </FormContainer>
    )
}

export default Login;
