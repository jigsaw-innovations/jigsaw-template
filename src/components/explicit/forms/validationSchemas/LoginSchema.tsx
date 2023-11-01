import * as Yup from 'yup';
// import {validateHandle} from '../../../../services/api';

interface ValidationSchemaShape {
  email: string;
  password: string;
}

// Validation schema using Yup
export const validationSchema = Yup.object().shape<ValidationSchemaShape>({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .max(30, 'Password must not exceed 30 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase character')
    .matches(
      /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      'Password must contain at least one special character or number',
    )
    // .test(
    //   'check-username',
    //   'User with this username or email does not exist',
    //   async function (value: string) {
    //     return new Promise(resolve => {
    //       // validateHandle(value, resolve);
    //     });
    //   },
    // )
    .required('Password is required'),
});
