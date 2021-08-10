export default function loginValidate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Введите Email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Такой почты не существует';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
  } else if (values.password.length < 8) {
    errors.password = 'Пароль должен состоять из восьми или более символов';
  }
  return errors;
}
