import Logo from './assets/pngwing.com.png'
const App = () => {
  return (
    <>
     <body className=' bg-slate-900 grid place-content-center h-screen'>
      <div className=" p-6 max-w-sm mx-auto bg-white rounded-lg flex items-center space-x-5 shadow-lg">
        <img className=" w-14 h-14" src={Logo} alt="" />
        <div className=" text-2xl font-medium text-black">
         TailWind CSS 
         <p className=' text-slate-500 text-base'> By Aadarsh Kumar </p>
        </div>
      </div>

      <button className=' bg-sky-500 mt-2 text-center text-white p-2 rounded-2xl hover:bg-white hover:text-black dark:to-blue-500'>Buy Now</button>
        <div className='text-white sm:text-red-500 md:text-green-700'>
          <p className='text-center my-4'>Lorem inpsums dollor.</p>
        </div>
      </body>
    </>
  )
}
export default App;