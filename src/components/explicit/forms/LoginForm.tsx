import React from 'react';
import {View, Button} from 'react-native';
import {Formik, FormikProps} from 'formik';
import {validationSchema} from './validationSchemas/LoginSchema';
import TextInputField from '../inputs/TextInputField';

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  return (
    <Formik<FormValues>
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues) => {
        console.log('Form values:', values);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }: FormikProps<FormValues>) => (
        <View>
          <TextInputField
            label="email"
            handleChange={handleChange("email")}
            placeholder={"miketyson@hotmail.com"}
            handleBlur={handleBlur("email")}
            value={values.email}
            touched={touched.email}
            error={errors.email}
            autoCapitalize={undefined}
          />
          <TextInputField
            label="password"
            handleChange={handleChange("password")}
            handleBlur={handleBlur("password")}
            value={values.password}
            touched={touched.password}
            error={errors.password}
            secureTextEntry
            placeholder={undefined}
            autoCapitalize={undefined}
          />
          <Button onPress={() => handleSubmit()} title="Submit" />
          {/*<GoogleSignInButton />*/}
        </View>
      )}
    </Formik>
  );
}
