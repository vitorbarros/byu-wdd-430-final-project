import {object, string, number, date, InferType} from 'yup';
import i18n from "i18next";
import {useFormik} from "formik";
import {usePostSignup} from "@/api/signup";

const signupFormValidation = object({
  name: string().required(i18n.t('name_required')),
  email: string().email(i18n.t('invalid_email')).required(i18n.t('email_required')),
  password: string().required(i18n.t('password_required')).min(6, i18n.t('password_6_characters'))
})

const useSignup = () => {
  const { mutateAsync: postSignup } = usePostSignup();

  const onSubmit = async ({ name, email, password }) => {
    console.log(name, email,password)

    const res = await postSignup({
      name,
      email,
      password
    });

    console.log('res', res);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signupFormValidation,
    onSubmit,
  });

  return {
    formik,
    name: formik.values.name,
    email: formik.values.email,
    password: formik.values.password,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
  }
}

export default useSignup;
