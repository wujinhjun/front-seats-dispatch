import { QRCode } from "antd";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import MyContext from "./MyContext";

export default function Show() {
  const location = useLocation();
  const [data, setData] = useState("");
  const { url: prefix } = useContext(MyContext);
  //   const url = `${prefix}/next`;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    id && setData(id);
  }, []);
  console.log(prefix);

  return (
    <div>
      <QRCode
        value={`${prefix}/verify/${data.substring(2, data.length - 2)}`}
      ></QRCode>
      <div>{data}</div>
      <div>
        您的座位是{data.substring(0, 2)}排{data.substring(data.length - 2)}号
      </div>
    </div>
  );
}
