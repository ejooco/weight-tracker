import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moment from "moment";

const Styles = styled.div`
  .submitButton {
    background: rgb(0, 255, 120);
    background: linear-gradient(
      142deg,
      rgba(0, 255, 120, 1) 8%,
      rgba(0, 212, 255, 1) 100%
    );
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
  }

  .submitButton:hover {
    background: rgb(0, 255, 120);
    border: 1px solid white;
  }

  form {
    background: none;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
`;
export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Styles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Weight"
          name="weight"
          ref={register}
        />
        <input
          name="date"
          type="date"
          max={moment().format("YYYY-MM-DD")}
          ref={register}
        />
        <input type="submit" className="submitButton" />
      </form>
    </Styles>
  );
}
