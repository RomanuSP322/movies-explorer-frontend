export default function updateValidate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Введите Email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Такой почты не существует';
  }
  if (!values.name) {
    errors.name = 'Введите имя';
  } else if (!/^[a-zа-я/s-]{2,30}$/i.test(values.name)) {
    errors.name = 'Такого имени не существует';
  }
  return errors;
}
