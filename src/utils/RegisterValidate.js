export default function validate(values) {
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
  if (!values.name) {
    errors.name = 'Введите имя';
  } else if (!/^[a-zа-я/s-]{2,30}$/i.test(values.name)) {
    errors.name = 'Такого имени не существует';
  }
  return errors;
}
