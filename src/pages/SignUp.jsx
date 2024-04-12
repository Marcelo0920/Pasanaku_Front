import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/jugador";
import PropTypes from "prop-types";

const SignUp = ({ register }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nombre: "",
  });

  const { nombre, email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    register({ nombre, email, password });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        placeholder="Email"
        type="email"
        value={email}
        name="email"
        onChange={(e) => onChange(e)}
      />
      <input
        placeholder="nombre"
        value={nombre}
        name="nombre"
        onChange={(e) => onChange(e)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
      />

      <input type="submit" defaultValue="Register" />
    </form>
  );
};

const mapStateToProps = (state) => ({});

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { register })(SignUp);
