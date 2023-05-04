import { createContext } from "react";

interface MyContextType {
  url: string;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
  host: string;
  setHost?: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType>({
  //   url: "http://10.181.222.139:3006",
  url: "http://124.223.70.157:3006",
  setUrl: () => {},
  host: "https://51967l20e0.yicp.fun",
  setHost: () => {},
});

export default MyContext;
