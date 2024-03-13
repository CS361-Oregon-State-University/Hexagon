import Navbar from "../components/navbar";
import { Link } from "react-router-dom";


const landing = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
                  Your Personal Trainer
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Access personalized workout plans, track your progress, and
                  join a community of fitness enthusiasts.
                </p>
              </div>
              <img
                alt="Hero"
                className="mx-auto object-contain aspect-video overflow-hidden rounded-xl object-center w-[65%]"
                height="500"
                src="/undraw_personal_trainer_re_cnua.svg"
                width="900"
              />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the key features that make our app the perfect
                  companion for your fitness journey.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-10 sm:grid-cols-2 md:gap-12 lg:gap-16 lg:max-w-6xl">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                      Personalized Plans
                    </h3>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Get customized workout routines tailored to your fitness
                      level and goals.
                    </p>
                  </div>
                  <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
                    height="310"
                    src="/undraw_healthy_lifestyle_re_ifwg.svg"
                    width="550"
                  />
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                      Exercise Library
                    </h3>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Access a comprehensive collection of workout demos and
                      instructions.
                    </p>
                  </div>
                  <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
                    height="310"
                    src="/undraw_indoor_bike_pwa4.svg"
                    width="550"
                  />
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                      Progress Tracking
                    </h3>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Monitor your gains with built-in tools for tracking
                      workouts and measuring results.
                    </p>
                  </div>
                  <img
                    alt="Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-contain object-center sm:w-full"
                    height="310"
                    src="/undraw_fitness_stats_sht6.svg"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Meet the Creators
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Trusted by the best teams in the world. We help teams of all
                  sizes.
                </p>
              </div>
              <div className="divide-y rounded-lg border">
                <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <img
                      alt="Logo"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/ali.png"
                      width="140"
                    />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <img
                      alt="Logo"
                      className="overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/ayush.png"
                      width="140"
                    />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-8">
                    <img
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/placeholder.svg"
                      width="140"
                    />
                  </div>
                </div>
                <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <img
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/placeholder.svg"
                      width="140"
                    />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <img
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/placeholder.svg"
                      width="140"
                    />
                  </div>
                  <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                    <img
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                      height="70"
                      src="/placeholder.svg"
                      width="140"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 PAAAAJ Inc. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Terms of Service (Don't hack us)
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacy (Don't hack others)
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default landing;
