export default function TaskC() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-[860px] h-screen flex bg-[url('/background.png')] bg-cover bg-center">
         <img src="/like.png" className="shadow-sm absolute w-[60px] h-[60px] rounded-3xl left-[340px] top-[180px]"/>
         <img src="/randomguyone.avif" className="shadow-sm absolute w-[67px] h-[60px] rounded-3xl left-[210px] top-[150px]"/>
         <img src="/cutegirl.jpg" className="shadow-sm absolute w-[80px] h-[60px] rounded-3xl left-[80px] top-[280px]"/>
         <img src="/smile.png" className="shadow-sm absolute w-[70px] h-[70px] left-[110px] top-[380px]"/>
         <img src="/redheadguy.avif" className="shadow-sm absolute w-[65px] h-[60px] rounded-3xl left-[230px] top-[400px] "/>
         <img src="/comment.png" className="shadow-sm absolute w-[50px] h-[50px] left-[600px] top-[400px]"/>
         <img src="/sikhguy.jpg" className="shadow-sm absolute w-[70px] h-[75px] rounded-3xl left-[480px] top-[170px]"/>
         <img src="/blackguy.jpeg" className="shadow-sm absolute w-[70px] h-[60px] rounded-3xl left-[650px] top-[300px]"/>
         <img src="/puridai.jpg" className="shadow-sm absolute w-[65px] h-[65px] rounded-3xl left-[510px] top-[450px]"/>
         <img src="/Trophy.png" className="shadow-sm absolute w-[70px] h-[70px] left-[370px] top-[480px]"/> 

         <div className="absolute left-[250px] top-[250px] w-[318px] h-[150px] flex flex-col justify-center p-4 gap-2 text-center">
          <p className="text-base text-gray-700 flex items-center justify-center gap-1">Hear How They Level Up Their Game <span>🤝</span></p>
          <p className="text-lg font-bold">Skills <span className="text-green-500">Masters</span> Unite</p>
          <p className="ml-14 font-medium flex items-center gap-1 cursor-pointer hover:text-gray-700">View all testimonials <span>→</span></p>
         </div>

      </div>
    </div>
  );
}
