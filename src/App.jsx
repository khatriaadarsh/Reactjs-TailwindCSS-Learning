import Logo from './assets/pngwing.com.png'
const App = () => {
  return (
    <>
   <body className=' bg-slate-900 grid place-content-center h-screen'>
  {/* Creating Card for logo and Creator Name */}
     <div className=" p-6 max-w-sm mx-auto bg-white rounded-lg flex items-center space-x-5 shadow-lg">
      <img className=" w-14 h-14" src={Logo} alt="" />
        <div className=" text-2xl font-medium text-black">
         TailWind CSS 
          <p className=' text-slate-500 text-base'>
          By Aadarsh Kumar 
        </p>
        
       </div>
        {/* Button with hovers  */}
      <button className=' bg-sky-500 mt-2 text-center text-white p-2 rounded-2xl hover:bg-black hover:text-white  dark:to-blue-500'>Buy Now</button>
      </div>
 
  {/* Learning how sm and md working for creating a responsive design */}
        <div className='text-white sm:text-red-500 md:text-green-700'>
          <p className='text-center my-4'>Lorem inpsums dollor.</p>
        </div>
   {/* For Image and Contact Creating Card */}
           <div className=' mt-3'>
             <div className=' max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl'>
               <div className='md:flex'>
                  <div> 
                   <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/2522657/pexels-photo-2522657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                  <div className='pt-8 pl-4 mb-4'>
                    <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                     An awesome card
                    </div>
                    <a className='pr-1 font-medium text-lg hover:text-blue-700' href="/">
                        Tailwind CSS is amazing once easy to understand the power it.
                    </a>
                    <p className=' mt-2 text-slate-500'>
                      Lorem ipsum dolor sit amet,
                    </p>
                  </div>
              </div>
            </div>
          </div>
      </body>
    </>
  )
}
export default App;