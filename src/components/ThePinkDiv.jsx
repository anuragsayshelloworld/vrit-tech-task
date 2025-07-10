import SuperScriptedNumber from "./SuperScriptedNumber"
export default function ThePinkDiv({text1, text2, text3, text4, number}){
return <div className="w-[23%] bg-[#f9ebec] rounded-xl flex flex-col justify-end text-[#c33241] relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="-rotate-90 text-center">
<div className="flex flex-col items-center text-[24px] font-semibold">
<span className="ml-8">{text1}</span>
<span className="ml-8">{text2}</span>
<small className="ml-12 text-sm">{text3}</small>
<small className="ml-12 text-sm">{text4}</small>
</div>
</div>
</div>

<div className="flex justify-center z-10 pb-4">
<SuperScriptedNumber num={number}/>
</div>

</div>
}