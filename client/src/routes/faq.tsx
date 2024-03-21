import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FAQPost from "../components/faqPosts";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const handleSendSupportEmail = async (username: any, formData: string, setFormData: any) => {
  console.log('ran')
  try {
    await axios.post('/sendSupportEmail', { username, formData }).then(() => {
      setFormData("");
    });
    console.log('Support email sent successfully:');
  } catch (error) {
    console.error('Error sending support email:', error);
  }
};

const faq = () => {
  const [formData, setFormData] = useState("");

  const { user } = useUser();
  const username = user?.username;

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <section>
          <FAQPost question="How do I reset my password?" answer="Go to the settings page and click on 'Reset Password'." category="Software" />
          <FAQPost question="How do I start a workout?" answer="Go to the 'Start Workout' page and click on 'Start Workout'." category="Software" />
          <FAQPost question="What workout plans are available?" answer="We offer a variety of plans including Cardio, Weightlifting, and Calisthenics." category="Workout" />
          <FAQPost question="I can't find the workout I want to do." answer="Check your filters, make sure you aren't accidentally leaving that exercise out of your search. If you still cannot find the exercise you want, " category="Software" />
          <FAQPost question="How do I start a workout?" answer="Go to the 'Start Workout' page and click on 'Start Workout'." category="Software" />
          <FAQPost question="What workout plans are available?" answer="We offer a variety of plans including Cardio, Weightlifting, and Calisthenics." category="Workout" />
        </section>
        <section>
          <div className="hero w-screen bg-base-200 mx-10 mt-10">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Can't find your question?</h1>
              </div>
              <div className="card shrink-0 w-screen max-w-4xl shadow-2xl bg-base-100">
                <div className="card-body">
                    <label className="label">
                      <span className="label-text">Describe your issue:</span>
                    </label>
                    <input type="text" className="input input-bordered input-lg w-full" value={formData} onChange={(e) => setFormData(e.target.value)} />                    
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={() => handleSendSupportEmail(username, formData, setFormData)}>Send</button>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default faq;
