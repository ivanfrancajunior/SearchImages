import SingleImage from "./SingleImage";
import useFetchImages from "./useFetchImages";

const Galery = () => {
  const { data, isLoading } = useFetchImages();

  if (isLoading)
    return (
      <section className='flex items-center justify-center'>
        <span className='loading loading-ring loading-lg loading-[#FFA6F6] mt-10 text-2xl'></span>
        <span>Loading...</span>
      </section>
    );

  if (data?.results.length === 0)
    return (
      <div className='text-5xl text-center mt-10'>No results found 😥</div>
    );
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 mt-10 '>
      {data?.results.map((photo) => (
        <SingleImage key={photo.id} {...photo} />
      ))}
    </div>
  );
};

export default Galery;
