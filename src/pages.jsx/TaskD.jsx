export default function TaskD() {
  return (
   <div className="flex h-screen w-screen justify-center items-center"> 
    <div className="flex flex-col border">
      {Array(12).fill(0).map((_, i) => (
        <div key={i} className="flex">
          {Array(25).fill(0).map((_, j) => (
            <div key={j} className="h-10 w-10 border"></div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
