import Form from "./Form";
import Galery from "./Galery";
import Toggle from "./ui/Toggle";

const App = () => {
  return (
    <main className='min-h-screen h-auto container p-10 w-full mx-auto'>
      <div className='flex w-full items-start justify-end'>
        <Toggle />
      </div>
      <div className='flex w-full items-center justify-center'>
        <Form />
      </div>
      <div className='flex w-full items-center justify-center'>
        <Galery />
      </div>
    </main>
  );
};

export default App;
