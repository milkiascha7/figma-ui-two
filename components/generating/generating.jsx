import { loading } from "@/public/assets";
import Image from "next/image";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.75rem] ${className || ''} text-base`}
    >
      <Image className="w-5 h-5 mr-5" src={loading} alt="Loading" />
      AI is Generating
    </div>
  );
};

export default Generating;
