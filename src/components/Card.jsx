export default function Card({ image, colorCode, title, subtitle, textA, textB, textC, textD, textE, position, textposition, rol }) {
  return (
    <div className="relative border w-[50%] h-full rounded-2xl" style={{ backgroundColor: colorCode }}>
      <div className={`absolute ${textposition} top-[27px] text-white ${rol}`}>
        <h2 className="text-2xl py-2 font-bold">{title}</h2>
        <h3 className="text-[16px] font-semibold mb-[10px]">{subtitle}</h3>
        <p className="text-gray-200 text-[12px]">{textA}</p>
        <p className="text-gray-200 text-[12px]">{textB}</p>
        <p className="text-gray-200 text-[12px]">{textC}</p>
        <p className="text-gray-200 text-[12px]">{textD}</p>
        <p className="text-gray-200 text-[12px]">{textE}</p>
      </div>

      <img src={image} alt="Another dude" className={`absolute ${position} w-[265px] object-contain`}/>
    </div>
  );
}
