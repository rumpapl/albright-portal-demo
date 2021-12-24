import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../../store';


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
    FormActionContainer,
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

    const dispatch = useDispatch();
    
    const onSubmit = useCallback(
        (data) => {
            console.log(data);
            // store data into redux store
            dispatch(login(data));
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
                <FormActionContainer>
                    <FormRoundedButton
                        color="primary"
                        variant="contained"
                        type="submit"
                        startIcon={<StartIcon />}
                    >
                        Log in
                    </FormRoundedButton>
                </FormActionContainer>
            </FormAuth>
        </FormContainer>
    )
}

export default Login;
