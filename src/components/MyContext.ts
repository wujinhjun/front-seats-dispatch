import { createContext } from "react";

interface MyContextType {
  url: string;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType>({
  //   url: "http://10.181.222.139:3006",
  url: "http://localhost:3006",
  setUrl: () => {},
});

export default MyContext;
