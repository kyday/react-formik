import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Input() {
  return (
    <div>
      <h1>Formik 연습.</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("이메일 형식에 맞게 입력해주세요. ")
            .required("이메일 또는 비밀번호를 입력해주세요."),
          password: Yup.string()
            .min(4, "최소 4자이상 입력해주세요.")
            .required("이메일 또는 비밀번호를 입력해주세요."),
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
