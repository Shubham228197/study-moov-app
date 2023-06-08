import { FC, createContext, useState } from "react";

type ChildType = {
  children: React.ReactNode;
};
type MainFilter = {
  nativeLand: string;
  program: string;
  specialities: string;
  priceRange: string;
  languages: string;
};
type sharingData = {
  globalFormData: MainFilter;
  setGlobalFormData: React.Dispatch<
    React.SetStateAction<{
      nativeLand: string;
      program: string;
      specialities: string;
      priceRange: string;
      languages: string;
    }>
  >;
};
const MoovData = createContext<sharingData>({} as sharingData);

const ContextProvider: FC<ChildType> = ({ children }) => {
  const [globalFormData, setGlobalFormData] = useState({
    nativeLand: "",
    program: ``,
    specialities: "",
    priceRange: "",
    languages: "all-languages",
  });
  return (
    <MoovData.Provider value={{ globalFormData, setGlobalFormData }}>{children}</MoovData.Provider>
  );
};
export { ContextProvider };
export default MoovData;
