import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PropPost = () => {
  const [organization, setOrganization] = useState('');
  const [content, setContent] = useState('');
  const [mobile, setMobile] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // Use useNavigate for programmatic navigation

  const sendData = async (organization, content, mobile) => {
    try {
      const response = await axios.post(`http://localhost:3000/props/`, {
        organization: organization,
        content: content,
        mobile: mobile
      })
      return response;
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      await sendData(organization, content, mobile);
      navigate('/Prop'); // Navigate to /Props after successful submission
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="bg-custom-bg bg-cover bg-center flex">
          <h1 className='text-5xl text-white font-bold p-[7%]'>Tell us what you have</h1>
        </div>

        <form className='flex flex-col p-10 mt=10 min-h-screen' onSubmit={handleSubmit}>
          <label htmlFor='organization' className='text-2xl'>Your Organization Name</label>
          <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            type="text"
            id="organization"
            className='px-6 py-2 border-2 border-black max-w-96 rounded mt-4'
          />

          <label htmlFor='content' className='text-2xl'>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="content"
            className='px-6 py-2 border-2 border-black max-w-[100] min-h-[350px] rounded mt-4'
          />

          <label htmlFor='mobile' className='text-2xl'>Your Mobile Number</label>
          <input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="Number"
            id="mobile"
            className='px-6 py-2 border-2 border-black max-w-96 rounded mt-4'
          />
          
          <button
            type='submit'
            className='px-3 py-2 max-w-fit rounded bg-blue-400 text-white font-semibold mt-3'
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PropPost;
