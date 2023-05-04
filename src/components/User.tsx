import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./User.scss";
import axios from "axios";
import MyContext from "./MyContext";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} 是必须的!",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: "${label} 不是一个正常的邮件!",
    // eslint-disable-next-line no-template-curly-in-string
    number: "${label} 不是一个正常的数字!",
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: "${label} 必须位于 ${min} 与 ${max} 之间",
  },
};

export default function User() {
  const { url: prefixUrl } = useContext(MyContext);
  const location = useLocation();

  const [seatNum, setSeatNum] = useState("");
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    id && setSeatNum(id);
  }, [location]);

  const url = `${prefixUrl}/claimed`;

  const handleSubmit = async () => {
    try {
      const res = await axios.post(url, {
        name,
        studentID,
        uid: seatNum.substring(2, seatNum.length - 2),
      });

      if (!res.data.status) {
        window.location.href = "/help";
      } else {
        window.location.href = `/show?id=${seatNum}`;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {seatNum && (
        <div className="form-wrapper">
          <div className="info">请提交您的相关信息</div>
          <div className="info-tips">
            您的位置在{parseInt(seatNum.substring(0, 2))}排
            {parseInt(seatNum.substring(seatNum.length - 2))}号
          </div>
          <div className="form">
            <Form
              {...layout}
              name="nest-messages"
              style={{ maxWidth: 600 }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="姓名"
                rules={[{ required: true }]}
              >
                <Input onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item
                name={["user", "studentID"]}
                label="学号"
                rules={[{ required: true }]}
              >
                <Input onChange={(e) => setStudentID(e.target.value)} />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
      {!seatNum && <div>错误的用户信息，请联系现场工作人员喵</div>}
    </>
  );
}
