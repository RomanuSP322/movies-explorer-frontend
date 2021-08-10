import { useState, useEffect } from 'react';

const useForm = (validate, currentValues) => {
  const [values, setValues] = useState(currentValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      Object.keys(values).length !== 0 &&
      JSON.stringify(currentValues) !== JSON.stringify(values)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors, values, currentValues]);

  useEffect(() => setErrors(validate(values)), [values, validate]);

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    values,
    errors,
    isValid,
  };
};

export default useForm;
