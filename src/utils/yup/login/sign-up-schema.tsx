import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'O nome é muito curto - deve ser 4 caracteres mínimo')
    .required('Nome requerido'),
  email: Yup.string()
    .email('Email deve ser um email válido')
    .required('Email requerido'),
  password: Yup.string().required('Senha requerida'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem corresponder')
    .required('Confirmação da senha requerido'),
});

export default signUpSchema;
