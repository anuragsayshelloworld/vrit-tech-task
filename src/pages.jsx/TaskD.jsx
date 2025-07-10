import { useState, useEffect } from "react";

export default function TaskD() {
  const rows = 12;
  const cols = 25;
  const totalCells = rows * cols;
  const activeCount = 8;

  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActive = new Set();
      while (newActive.size < activeCount) {
        const randIndex = Math.floor(Math.random() * totalCells);
        newActive.add(randIndex);
      }
      setActiveCells([...newActive]);
    }, 3000);

    return () => clearInterval(interval); 
  }, [totalCells]);

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="flex flex-col border">
        {Array(rows).fill(0).map((_, i) => (
          <div key={i} className="flex">
            {Array(cols).fill(0).map((_, j) => {
              const cellIndex = i * cols + j;
              const isActive = activeCells.includes(cellIndex);
              return (
                <div
                  key={j}
                  className={`h-10 w-10 border transition-colors duration-500 ${
                    isActive ? "bg-[#7c52d2]" : "bg-white"
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
