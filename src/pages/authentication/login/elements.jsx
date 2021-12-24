import { styled } from "@material-ui/core";
import { Box } from "@material-ui/core";

// internal imports
import {
    FormContainerAuth,
    FormImageContiner,
} from '../../../components/elements';

export{
    InputContainer,
} from '../../../components/material-ui/input/elements';

// internl exports
export{
    FormAuth,
    FormActionContainer,
    FormRoundedButton,
} from '../../../components/elements';


export const FormContainer = styled(FormContainerAuth)(({ theme }) => ({}));
export const FormImageWrapper = styled(FormImageContiner)(({ theme }) => ({

    '& .MuiSvgIcon-root': {
        height: 100,
        width: 100
    }
}));