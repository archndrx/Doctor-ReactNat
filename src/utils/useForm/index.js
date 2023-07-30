const {useState} = require('react');

export const useForm = initValue => {
  const [values, setValues] = useState(initValue);
  return [
    values,
    (type, params) => {
      if (type === 'reset') {
        return setValues(initValue);
      }
      return setValues({...values, [type]: params});
    },
  ];
};
