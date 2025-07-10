  import SuperScriptedNumber from "../components/SuperScriptedNumber"
  import ThePinkDiv from "../components/ThePinkDiv"

  export default function TaskA(){
  return <div className="flex flex-col w-[1100px] h-[550px] gap-3 p-4 m-4 rounded-2xl">

  <div className="h-32 flex flex-col justify-end">
  <p className="text-[20px] text-[#8d8d8d] font-semibold">Explore our classes and master trending skills!</p>
  <p className="text-[28px] font-bold">
  Dive into <span className="text-[#24b68a]">What's Hot Right Now!</span> 🔥
  </p>
  </div>

  <div className="flex-1 flex p-2 gap-4">
  <div className="flex flex-col w-[48%] bg-[#c33241] rounded-xl">

  {/*1st div inside the red one*/}
  <div className="flex justify-end">
  <p className="text-sm text-white hover:text-gray-200 cursor-pointer py-6 px-10">View All Courses <span>&rarr;</span></p>
  </div>

  <div className="flex flex-1 justify-center items-center gap-8">

  <div className="bg-[#5a1e2e] p-2 rotate-[-12deg] shadow-xl">
  <img src="/react.png" alt="React logo" className="w-16  min-w-16"/>
  </div> 

  <div className="rotate-[12deg]">
  <img src="/social.png" alt ="Social Logo" className="drop-shadow-sm w-16"/>
  </div>

  <div className="rotate-[-12deg]">
  <img src="/Vue.png" alt ="Vue logo" className="w-16 drop-shadow-sm"/>
  </div>

  <div className="rotate-[-12deg]">
  <img src="/krita.png" alt ="Krita logo" className="drop-shadow-sm w-16"/>
  </div>

  </div> 

  <div className="flex h-40 justify-center items-center gap-4 text-white">

  <SuperScriptedNumber num='23'/>
  <div className="flex flex-col leading-tight mt-4">
  <h2 className="text-2xl font-semibold">All Courses</h2>
  <p className="text-gray-100">Courses you are powering</p>
  <p className="text-gray-100">through right now</p>
  </div>
  </div>
  </div>

  <ThePinkDiv text1="Upcoming" text2="Classes" text3="Exciting new courses" text4="Waiting to boast your skills" number="05"/>
  <ThePinkDiv text1="Ongoing" text2="Courses" text3="Currently happening -- Don't" text4="miss out on the action" number="10"/>                
  </div>
  </div>
  }

