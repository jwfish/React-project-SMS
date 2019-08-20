import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  /* CSS */
  body {
  }

  html,
  body,
  #root {
    background-color: #000;
  }

  .login {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #f9f9f9;
  }

  p {
    color: #000;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    height: 300px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #e5e5e5;
    box-shadow: 0 5px 20px 0 #ddd;
  }

  .font-weight-normal {
    font-weight: 400 !important;
  }

  .mb-3,
  .my-3 {
    margin-bottom: 1rem !important;
    text-align: center;
    color: #478fca !important;
    font-weight: normal;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    /* border-radius: .25rem; */
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-top: 1em;
  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-group-lg > .btn,
  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }

  .btn-block {
    display: block;
    width: 100%;
    margin-top: 2rem !important;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

class Login extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: "login"
        },
        h(
          "form",
          {
            className: "form-signin"
          },
          h(
            "h3",
            {
              className: "h3 mb-3 font-weight-normal"
            },
            "\u9178\u83DC\u9C7C--\u5B66\u5458\u540E\u53F0\u7CFB\u7EDF"
          ),
          h(
            "label",
            {
              className: "sr-only"
            },
            "Email address"
          ),
          h("input", {
            type: "email",
            id: "inputEmail",
            className: "form-control idname",
            placeholder: "\u8EAB\u4EFD\u8BC1\u53F7\u7801/\u5B66\u53F7",
            required: ""
          }),
          h(
            "label",
            {
              className: "sr-only"
            },
            "Password"
          ),
          h("input", {
            type: "password",
            id: "inputPassword",
            className: "form-control",
            placeholder: "\u5BC6\u7801",
            required: ""
          }),
          h(
            "button",
            {
              className: "btn btn-lg btn-primary btn-block",
              type: "submit"
            },
            "\u767B\u5F55"
          ),
          h(
            "p",
            {
              className: "mt-5 mb-3 text-muted"
            },
            "\xA9 2010-2019"
          )
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  componentDidMount() {}
}

Login.css = `
  /* CSS */
  body {}

  html,
  body,
  #root {
    background-color: #000;
  }

  .login {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #f9f9f9;

  }

  p {
    color: #000;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    height: 300px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #e5e5e5;
    box-shadow: 0 5px 20px 0 #ddd;
  }

  .font-weight-normal {
    font-weight: 400 !important;
  }

  .mb-3,
  .my-3 {
    margin-bottom: 1rem !important;
    text-align: center;
    color: #478fca !important;
    font-weight: normal;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    border: 0;
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    /* border-radius: .25rem; */
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin-top: 1em;

  }

  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-group-lg>.btn,
  .btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }

  .btn-block {
    display: block;
    width: 100%;
    margin-top: 2rem !important;
  }

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }

`;
export default Login;
