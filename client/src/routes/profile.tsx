import Navbar from "../components/navbar";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { useState } from 'react';

const profile = () => {
  const username = useUser().user?.username;
  const userImg = useUser().user?.imageUrl;
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/submitEmail', formData);
      console.log('Form data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };


  const handleSendNotification = async () => {
    try {
      const response = await axios.post('/sendEmailNotification');
      console.log('Notification sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold mt-[50px]">
          Welcome {username}!
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={userImg} />
            </div>
          </div>
        </h1>
        <form className="mt-5 bg-slate-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2">
              Email:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id = "email" name="email" value={formData.email} onChange={handleInputChange}/>
            <input className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit"></input>
          </div>
          <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSendNotification}>Send Notification</button>
        </form>
      </div>
      
    </>
  );
};

export default profile;
