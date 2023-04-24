import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};

  if (values.name == '') {
    errors.name = 'Campo requerido';
  } else if (values.name.length < 3) {
    errors.name = 'El nombre es muy corto';
  }

  if (values.lastname == '') {
    errors.lastname = 'Campo requerido';
  } else if (values.lastname.length < 3) {
    errors.lastname = 'El apellido es muy corto';
  }

  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br />
      <label>Apellido</label>
      <input
        type="text"
        name="lastname"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <br />
      <label>Email</label>
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
