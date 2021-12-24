import React, { useCallback } from 'react';
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
    const defaultValues = {
        username: '',
        password: '',
    };

    const { control, handleSubmit, } = useForm({
        defaultValues: defaultValues,
    });

    const onSubmit = useCallback(
        (data) => {
            console.log(data);
        },
        []
    );

    return (
        <FormContainer>
            <FormImageWrapper>
                <FaceIcon />
            </FormImageWrapper>
            <FormAuth onSubmit={handleSubmit(onSubmit)}>
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
                        startIcon={<StartIcon />}
                    >
                        Log in
                    </FormRoundedButton>
                </FromActionContainer>
            </FormAuth>
        </FormContainer>
    )
}

export default Login;
