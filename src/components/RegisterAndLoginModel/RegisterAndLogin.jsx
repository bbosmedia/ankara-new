import React, {useState, useEffect} from "react";
import Login from "./Login";
import Register from "./Register";
import { useSelector} from 'react-redux'
import {selectRegister} from '../../redux/ChangeRegister';
import useBreadcrumbs from "use-react-router-breadcrumbs";


const RegisterAndLogin = ({changeLogin}) => {
  const [lang, setLang] = useState("/ru");
  const breadcrumbs = useBreadcrumbs();
  const register = useSelector(selectRegister);
  useEffect(() => {
    document.querySelector('#authModal___BV_modal_outer_').addEventListener('click', (event) => {
      if(!document.querySelector('#authModal___BV_modal_body_').contains(event.target)){
        changeLogin();
      }
    });
    if (breadcrumbs.length > 1) {
      if (breadcrumbs[1].key === "/uz") {
        setLang("/uz");
      } else if (breadcrumbs[1].key === "/en") {
        setLang("/en");
      } else {
        setLang("/ru");
      }
    } else {
      setLang("/ru");
    }
  }, [breadcrumbs]);
  return (
    <div
      id="authModal___BV_modal_outer_"
      style={{ position: "absolute", zIndex: 1040 }}
    >
      <div
        id="authModal"
        role="dialog"
        aria-describedby="authModal___BV_modal_body_"
        className="modal fade show ya-auth-modal d-block"
        aria-modal="true"
        style={{zIndex: 1041}}
      >
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div id="authModal___BV_modal_content_" className="modal-content">
            <div id="authModal___BV_modal_body_" className="modal-body">
              <form id="auth-form">
                <div className="ya-modal-logo text-center">
                  <img
                    height="60"
                    src="/images/logo.svg"
                    className="lazyLoad isLoaded"
                  />
                </div>
                {register === 'login' && <Login lang={lang} />}
                {register === 'register' && <Register lang={lang} />}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="authModal___BV_modal_backdrop_" className="modal-backdrop"></div>
    </div>
  );
};

export default RegisterAndLogin;
