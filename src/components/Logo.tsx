import Image from "next/image";
import { logo } from "../../public";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3 font-semibold text-lg">
      <Image src={logo} alt="logo" width={24} height={24} />
      Tasky AI
    </div>
  );
};
