import { useNavigate } from "react-router-dom";
import CardB from "../components//CardB";

export default function CongregationPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-1">
        <CardB imgName="TaskA.JPG" onClick={() => navigate("/taska")} />
        <CardB imgName="TaskB.JPG" onClick={() => navigate("/taskb")} />
      </div>
      <div className="flex flex-1">
        <CardB imgName="TaskC.JPG" onClick={() => navigate("/taskc")} />
        <CardB imgName="TaskD.JPG" onClick={() => navigate("/taskd")} />
      </div>
    </div>
  );
}
