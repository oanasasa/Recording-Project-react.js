import React from "react";
// import{ signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import SignUpForm from "../../components/sing-up-form-component/sing-up-form.component";
import SignInForm from "../../components/sing-in-form-component/sing-in-form.component";
import Footer from "../../components/footer-component/footer.component";
import "./../../style.css";

const Authentification = () => {
  // const logGoogleUser = async () => {
  //     const { user } = await signInWithGooglePopup();
  // };

  return (
    <div className="page-container">
      <div className="section bg-accent">
        <div className="row authentificationContainer">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentification;
