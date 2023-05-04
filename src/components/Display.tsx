import { QRCode, Button } from "antd";
import { useContext, useState } from "react";
import axios from "axios";
import MyContext from "./MyContext";

export default function Display() {
  const [data, setData] = useState([]);
  const { url: prefix, host } = useContext(MyContext);
  const url = `${prefix}/next`;

  const nextSeat = async () => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data.status);
      if (!res.data.status) {
        window.location.href = "/login";
      }

      setData(res.data.data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <QRCode value={`${host}/user?id=${data}`}></QRCode>
      <Button type="primary" onClick={nextSeat}>
        next
      </Button>
      <div>{data}</div>
    </div>
  );
}
