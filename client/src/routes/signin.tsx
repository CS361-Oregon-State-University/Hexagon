import { SignIn } from "@clerk/clerk-react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const signin = () => {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen max-w-[75%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              I'm thrilled to welcome you to our workout app, where your journey
              to fitness begins! Get ready to embark on a transformative
              experience filled with tailored workouts and expert guidance.
            </p>
          </div>
          <SignIn signUpUrl="/sign-up" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default signin;
