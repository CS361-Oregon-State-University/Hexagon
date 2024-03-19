import Navbar from "../components/navbar";
import Dropdown from "../components/dropdown";
import { Link } from "react-router-dom";
const customizeWorkoutPlan = () => {

    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen justify-between">
                <main>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex-auto badge badge-neutral text-2xl p-5 m-5">Customize workout plan</div>
                        <Dropdown dropdownName="Add Equipment" dropdownItems={["Treadmill", "Yoga mat", "Flat Bench"]} />
                        <Dropdown dropdownName="Set Goal" dropdownItems={["Weight Loss", "Weight Gain"]} />
                        <Dropdown dropdownName="Add Injury" dropdownItems={["Knee Injury", "Back Injury", "Sprained Ankle"]} />
                        <button className="btn btn-success mt-6">Confirm</button>
                    </div>
                    <div className="card w-96 bg-warning text-primary-content mt-5 ml-[5rem]">
                        <div className="card-body text-black">
                            <h2 className="card-title">Warning</h2>
                            <p>"Confirm" will replace your current workout plan
                                with a new workout plan based on your preferences</p>
                        </div>
                    </div>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-[50px] h-10">
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
        </>
    );
};

export default customizeWorkoutPlan;