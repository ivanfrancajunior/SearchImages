import React from "react";
import { useGlobalContext } from "./context/GloblaContext";

const Form = () => {
  const { setQuery } = useGlobalContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serchValue = e.currentTarget.serach.value;
    if (!serchValue) return;
    setQuery(serchValue);
  };
  return (
    <form className='flex gap-2 items-center' onSubmit={handleSubmit}>
      <input
        name='serach'
        type='text'
        className='w-96 border-black border-2 p-2.5 rounded-full focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] active:shadow-[2px_2px_0px_rgba(0,0,0,1)]  dark:text-slate-400 focus:text-black'
        placeholder='Type a word to find its background...'
      />

      <button
        type='submit'
        className='h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#FFA6F6] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full text-black'
      >
        Search
      </button>
    </form>
  );
};

export default Form;
