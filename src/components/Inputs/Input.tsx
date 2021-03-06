import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type MyformValues = {
  email: string;
  password: string;
};

export default function Input() {
  const initivalValues: MyformValues = { email: "", password: "" };
  return (
    <div>
      <h1>Formik 연습.</h1>
      <Formik
        initialValues={initivalValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("이메일 형식에 맞게 입력해주세요. ")
            .required("이메일 또는 비밀번호를 입력해주세요."),
          password: Yup.string()
            .min(4, "최소 4자이상 입력해주세요.")
            .required("이메일 또는 비밀번호를 입력해주세요.")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <label htmlFor='email'>email</label>
            <Field name='email' type='text' />
            <div>
              <ErrorMessage name='email' />
            </div>
          </div>

          <label htmlFor='password'>password</label>
          <Field name='password' type='password' />
          <div>
            <ErrorMessage name='password' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
