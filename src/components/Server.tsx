import { Input, Button } from "antd";
import { useState, useContext } from "react";
import MyContext from "./MyContext";

export default function Server() {
  const [data, setData] = useState("");
  const [myHost, setMyHost] = useState("");

  const { host, setUrl, setHost } = useContext(MyContext);

  const handleSubmit = () => {
    setUrl && setUrl(data);
  };

  const handleHost = () => {
    setHost && setHost(myHost);
    console.log(host);
  };

  return (
    <>
      <div>
        <Input
          placeholder="服务端地址"
          onChange={(e) => setData(e.target.value)}
        />
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      <div>
        <Input
          placeholder="前端地址"
          onChange={(e) => setMyHost(e.target.value)}
        />
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          onClick={handleHost}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
