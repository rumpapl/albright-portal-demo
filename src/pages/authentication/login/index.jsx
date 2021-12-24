import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';


// internal imports
import {
    FaceIcon,
    StartIcon,
} from '../../../assets/icons';
import { FormController } from '../../../components/hoc';
import {
    FormContainer,
    FormImageWrapper,
    FormAuth,
    InputContainer,
    FromActionContainer,
    FormRoundedButton,
} from './elements';
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
                <FromActionContainer>
                    <FormRoundedButton
                        color="primary"
                        variant="contained"
                        type="submit"
                        startIcon={<StartIcon/>}
                    >Log in</FormRoundedButton>
                </FromActionContainer>
            </FormAuth>
        </FormContainer>
    )
}

export default Login;
