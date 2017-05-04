const NAMESPACE = 'neska';
const PASSWORD_ATTRIBUTE = 'password';

export default {
  get: key => JSON.parse(localStorage.getItem(`${NAMESPACE}-${key}`)),

  remove: key => localStorage.removeItem(`${NAMESPACE}-${key}`),

  set: (key, data = {}) => {
    const values = Object.keys(data).reduce(
      (memo, item) =>
        (item.includes(PASSWORD_ATTRIBUTE)
          ? memo
          : { ...memo, [item]: data[item] }),
      {}
    );

    localStorage.setItem(`${NAMESPACE}-${key}`, JSON.stringify(values));
  },
};
