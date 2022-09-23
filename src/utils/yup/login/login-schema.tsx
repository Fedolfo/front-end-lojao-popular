import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email deve ser um email válido')
    .required('Email requerido'),
  password: Yup.string().required('Senha requerida'),
});

export default loginSchema;
