import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FAQPost from "../components/faqPosts";

const faq = () => {
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
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Describe your issue:</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full" />                    
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
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
