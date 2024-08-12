import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./termsandconditions.css";
import { Row, Col } from "react-bootstrap";

const TermsAndConditions = () => {
  return (
    <div className="terms_section">
      <div className="terms">
        <Header />

        <Container>
          {/* <h1><b>Terms & Conditions</b></h1> */}
          <h4>
            <b>Terms & Conditions</b>
          </h4>
          <h6 className="pt-5">
            <b>Last updated on 09-08-2024 11:21:34</b>
          </h6>
          <p>
            These Terms and Conditions, along with privacy policy or other terms
            (“Terms”) constitute a binding agreement by and between SPLENDID APP
            PRIVATE LIMITED, ( “Website Owner” or “we” or “us” or “our”) and you
            (“you” or “your”) and relate to your use of our website, goods (as
            applicable) or services (as applicable) (collectively, “Services”).
          </p>
          <p>
            By using our website and availing the Services, you agree that you
            have read and accepted these Terms (including the Privacy Policy).
            We reserve the right to modify these Terms at any time and without
            assigning any reason. It is your responsibility to periodically
            review these Terms to stay informed of updates.
          </p>
          <p>
            The use of this website or availing of our Services is subject to
            the following terms of use: To access and use the Services, you
            agree to provide true, accurate and complete information to us
            during and after registration, and you shall be responsible for all
            acts done through the use of your registered account.
          </p>
          <p>
            Neither we nor any third parties provide any warranty or guarantee
            as to the accuracy, timeliness, performance, completeness or
            suitability of the information and materials offered on this website
            or through the Services, for any specific purpose. You acknowledge
            that such information and materials may contain inaccuracies or
            errors and we expressly exclude liability for any such inaccuracies
            or errors to the fullest extent permitted by law.
          </p>
          <p>
            Your use of our Services and the website is solely at your own risk
            and discretion. You are required to Independently assess and ensure
            that the Services meet your requirements. The contents of the
            Website and the Services are proprietary to Us and you will not have
            any authority to claim any intellectual property rights, title, or
            interest in its contents.
          </p>
          <p>
            You acknowledge that unauthorized use of the Website or the Services
            may lead to action against you as per these Terms or applicable
            laws. You agree to pay us the charges associated with availing the
            Services.
          </p>
          <p>
            You agree not to use the website and/ or Services for any purpose
            that is unlawful, illegal or forbidden by these Terms, or Indian or
            local laws that might apply to you.
          </p>
          <p>
            You agree and acknowledge that the website and the Services may
            contain links to other third-party websites. On accessing these
            links, you will be governed by the terms of use, privacy policy and
            other policies of such third-party websites.
          </p>
          <p>
            You understand that upon initiating a transaction for availing the
            Services you are entering into a legally binding and enforceable
            contract with us for the Services.
          </p>
          <p>
            You shall be entitled to claim a refund of the payment made by you
            in case we are not able to provide the Service. The timelines for
            such returns and refund will be according to the specific Service
            you have availed or within the period provided in our policies (as
            applicable). In case you do not raise a refund claim within the
            stipulated time, then this would make you ineligible for a refund.
          </p>
          <p>
            Notwithstanding anything contained in these Terms, the parties shall
            not be liable for any failure to perform an obligation under these
            Terms if performance is prevented or delayed by a force majeure
            event.
          </p>
          <p>
            These Terms and any dispute or claim relating to it, or its
            enforceability, shall be governed by and construed in accordance
            with the laws of India.
          </p>
          <p>
            All disputes arising out of or in connection with these Terms shall
            be subject to the exclusive jurisdiction of the courts in Bangalore,
            Karnataka.
          </p>
          <p>
            All concerns or communications relating to these Terms must be
            communicated to us using the contact information provided on this
            website.
          </p>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
