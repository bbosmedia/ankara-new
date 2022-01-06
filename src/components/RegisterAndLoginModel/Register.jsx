import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeRegister } from "../../redux/ChangeRegister";

const Register = ({ lang }) => {
  const [name, setName] = useState("");
  const [validatename, setValidatename] = useState(true);
  const [birthdate, setBirthdate] = useState("");
  const [validatebirthdate, setValidatebirthdate] = useState(true);
  const [phonenumber, setPhonenumber] = useState("");
  const [validatephonenumber, setValidatephonenumber] = useState(true);

  const submit = () => {
    // Validate Name
    if (name.length < 1) {
      setValidatename(false);
    } else {
      setValidatename(true);
    }

    // Validate Birthdate
    if (birthdate.length < 1) {
      setValidatebirthdate(false);
    } else {
      setValidatebirthdate(true);
    }

    // Validate Phone Number
    if (phonenumber.length < 1) {
      setValidatephonenumber(false);
    } else {
      setValidatephonenumber(true);
    }
  };
  const dispatch = useDispatch();
  if (lang === "/uz") {
    return (
      <>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="register-name"
            autoComplete="off"
            placeholder="Iltimos FIOni kiriting"
            className={
              validatename ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">Iltimos FIOni kiriting</div>
        </div>
        <div className="form-group">
          <input
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            id="register-birthday"
            type="text"
            autoComplete="off"
            placeholder="kk.oo.yyyy"
            className={
              validatebirthdate ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">
            Iltimos tug'ilgan kun sanasini kiriting
          </div>
        </div>
        <div className="form-group">
          <input
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            id="register-phone"
            type="text"
            autoComplete="off"
            placeholder="+998 99 123-45-67"
            className={
              validatephonenumber ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">
            Iltimos telefon raqamingizni kiriting
          </div>
        </div>
        <div className="form-group mt-4">
          <button
            onClick={submit}
            type="button"
            className="btn btn-danger ya-btn-red w-100"
          >
            Kod jo'natish
          </button>
        </div>
        <div className="ya-ha-link">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(changeRegister("login"))}
          >
            Mening akkauntim bor
          </a>
        </div>
      </>
    );
  } else if (lang === "/en") {
    return (
      <>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="register-name"
            autoComplete="off"
            placeholder="Please enter name"
            className={
              validatename ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">Please enter name</div>
        </div>
        <div className="form-group">
          <input
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            id="register-birthday"
            type="text"
            autoComplete="off"
            placeholder="dd.mm.yyyy"
            className={
              validatebirthdate ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">
            Please enter your date of birth
          </div>
        </div>
        <div className="form-group">
          <input
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            id="register-phone"
            type="text"
            autoComplete="off"
            placeholder="+998 99 123-45-67"
            className={
              validatephonenumber ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">Please enter your phone number</div>
        </div>
        <div className="form-group mt-4">
          <button
            onClick={submit}
            type="button"
            className="btn btn-danger ya-btn-red w-100"
          >
            Send code
          </button>
        </div>
        <div className="ya-ha-link">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(changeRegister("login"))}
          >
            I already have an account
          </a>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="form-group">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="register-name"
            autoComplete="off"
            placeholder="Пожалуйста введите ФИО"
            className={
              validatename ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">Пожалуйста введите ФИО</div>
        </div>
        <div className="form-group">
          <input
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            id="register-birthday"
            type="text"
            autoComplete="off"
            placeholder="дд.мм.гггг"
            className={
              validatebirthdate ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">
            Пожалуйста введите дата рождения
          </div>
        </div>
        <div className="form-group">
          <input
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            id="register-phone"
            type="text"
            autoComplete="off"
            placeholder="+998 99 123-45-67"
            className={
              validatephonenumber ? "form-control" : "form-control is-invalid"
            }
          />
          <div className="invalid-feedback">
            Пожалуйста, введите номер телефона
          </div>
        </div>
        <div className="form-group mt-4">
          <button
            onClick={submit}
            type="button"
            className="btn btn-danger ya-btn-red w-100"
          >
            Выслать код
          </button>
        </div>
        <div className="ya-ha-link">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(changeRegister("login"))}
          >
            У меня уже есть аккаунт
          </a>
        </div>
      </>
    );
  }
};

export default Register;
