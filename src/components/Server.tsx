import { Input, Button } from "antd";
import { useState, useContext } from "react";
import MyContext from "./MyContext";

export default function Server() {
  const [data, setData] = useState("");
  const { setUrl } = useContext(MyContext);

  const handleSubmit = () => {
    setUrl && setUrl(data);
  };

  return (
    <div>
      <Input onChange={(e) => setData(e.target.value)} />
      <Button
        type="primary"
        htmlType="submit"
        size="large"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
