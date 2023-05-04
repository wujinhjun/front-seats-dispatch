import { useState, useContext, useEffect } from "react";
// import QrReader from 'react-qr-reader';

import axios from "axios";
import MyContext from "./MyContext";
export default function Verify() {
  const [data, setData] = useState<boolean>(false);
  const { url: prefix } = useContext(MyContext);
  const url = `${prefix}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.data.status) {
        setData(true);
      } else {
        window.location.href = "/login";
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      {data && <div>waiting</div>}
      {!data && <div>login</div>}
    </>
  );
}
