export default function CardB({ imgName, onClick }) {
  return (
    <div className="w-1/2 h-full flex justify-center items-center">
      <img
        src={imgName}
        onClick={onClick}
        className="h-[240px] w-[400px] border shadow-md cursor-pointer p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
        alt={imgName}
      />
    </div>
  );
}
