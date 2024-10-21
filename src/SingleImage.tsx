import { Image } from "./useFetchImages";

const SingleImage = ({ id, urls, user }: Image) => {
  return (
    <div
      key={id}
      className=' hover:shadow-[4px_4px_0px_#f9a8d4] rounded-sm my-2 hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer'
    >
      <img
        src={urls.small}
        className='min-h-[150px] h-full object-cover rounded-sm'
      />
      <h2 className='text-[#bfff00] font-bold mt-1'> @{user.name}</h2>
    </div>
  );
};

export default SingleImage;
