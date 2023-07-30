const {useState} = require('react');

export const useForm = initValue => {
  const [values, setValues] = useState(initValue);
  return [
    values,
    (type, params) => {
      return setValues({...values, [type]: params});
    },
  ];
};
