import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import "./Seats.scss";
import MyContext from "./MyContext";

const layout = [
  [
    { seat_number: "01-22", item: 22 },
    { seat_number: "01-20", item: 20 },
    { seat_number: "01-18", item: 18 },
    { seat_number: "01-16", item: 16 },
    { seat_number: "01-14", item: 14 },
    { seat_number: "01-12", item: 12 },
    { seat_number: "01-10", item: 10 },
    { seat_number: "01-08", item: 8 },
    { seat_number: "01-06", item: 6 },
    { seat_number: "01-04", item: 4 },
    { seat_number: "01-02", item: 2 },
    { seat_number: "01-01", item: 1 },
    { seat_number: "01-03", item: 3 },
    { seat_number: "01-05", item: 5 },
    { seat_number: "01-07", item: 7 },
    { seat_number: "01-09", item: 9 },
    { seat_number: "01-11", item: 11 },
    { seat_number: "01-13", item: 13 },
    { seat_number: "01-15", item: 15 },
    { seat_number: "01-17", item: 17 },
    { seat_number: "01-19", item: 19 },
    { seat_number: "01-21", item: 21 },
    { seat_number: "01-23", item: 23 },
  ],
  [
    { seat_number: "02-22", item: 22 },
    { seat_number: "02-20", item: 20 },
    { seat_number: "02-18", item: 18 },
    { seat_number: "02-16", item: 16 },
    { seat_number: "02-14", item: 14 },
    { seat_number: "02-12", item: 12 },
    { seat_number: "02-10", item: 10 },
    { seat_number: "02-08", item: 8 },
    { seat_number: "02-06", item: 6 },
    { seat_number: "02-04", item: 4 },
    { seat_number: "02-02", item: 2 },
    { seat_number: "02-01", item: 1 },
    { seat_number: "02-03", item: 3 },
    { seat_number: "02-05", item: 5 },
    { seat_number: "02-07", item: 7 },
    { seat_number: "02-09", item: 9 },
    { seat_number: "02-11", item: 11 },
    { seat_number: "02-13", item: 13 },
    { seat_number: "02-15", item: 15 },
    { seat_number: "02-17", item: 17 },
    { seat_number: "02-19", item: 19 },
    { seat_number: "02-21", item: 21 },
    { seat_number: "02--1", item: -1 },
  ],
  [
    { seat_number: "03--1", item: -1 },
    { seat_number: "03-20", item: 20 },
    { seat_number: "03-18", item: 18 },
    { seat_number: "03-16", item: 16 },
    { seat_number: "03-14", item: 14 },
    { seat_number: "03-12", item: 12 },
    { seat_number: "03-10", item: 10 },
    { seat_number: "03-08", item: 8 },
    { seat_number: "03-06", item: 6 },
    { seat_number: "03-04", item: 4 },
    { seat_number: "03-02", item: 2 },
    { seat_number: "03-01", item: 1 },
    { seat_number: "03-03", item: 3 },
    { seat_number: "03-05", item: 5 },
    { seat_number: "03-07", item: 7 },
    { seat_number: "03-09", item: 9 },
    { seat_number: "03-11", item: 11 },
    { seat_number: "03-13", item: 13 },
    { seat_number: "03-15", item: 15 },
    { seat_number: "03-17", item: 17 },
    { seat_number: "03-19", item: 19 },
    { seat_number: "03-21", item: 21 },
    { seat_number: "03--1", item: -1 },
  ],
  [
    { seat_number: "04--1", item: -1 },
    { seat_number: "04-20", item: 20 },
    { seat_number: "04-18", item: 18 },
    { seat_number: "04-16", item: 16 },
    { seat_number: "04-14", item: 14 },
    { seat_number: "04-12", item: 12 },
    { seat_number: "04-10", item: 10 },
    { seat_number: "04-08", item: 8 },
    { seat_number: "04-06", item: 6 },
    { seat_number: "04-04", item: 4 },
    { seat_number: "04-02", item: 2 },
    { seat_number: "04-01", item: 1 },
    { seat_number: "04-03", item: 3 },
    { seat_number: "04-05", item: 5 },
    { seat_number: "04-07", item: 7 },
    { seat_number: "04-09", item: 9 },
    { seat_number: "04-11", item: 11 },
    { seat_number: "04-13", item: 13 },
    { seat_number: "04-15", item: 15 },
    { seat_number: "04-17", item: 17 },
    { seat_number: "04-19", item: 19 },
    { seat_number: "04--1", item: -1 },
    { seat_number: "04--1", item: -1 },
  ],
  [
    { seat_number: "05--1", item: -1 },
    { seat_number: "05--1", item: -1 },
    { seat_number: "05-18", item: 18 },
    { seat_number: "05-16", item: 16 },
    { seat_number: "05-14", item: 14 },
    { seat_number: "05-12", item: 12 },
    { seat_number: "05-10", item: 10 },
    { seat_number: "05-08", item: 8 },
    { seat_number: "05-06", item: 6 },
    { seat_number: "05-04", item: 4 },
    { seat_number: "05-02", item: 2 },
    { seat_number: "05-01", item: 1 },
    { seat_number: "05-03", item: 3 },
    { seat_number: "05-05", item: 5 },
    { seat_number: "05-07", item: 7 },
    { seat_number: "05-09", item: 9 },
    { seat_number: "05-11", item: 11 },
    { seat_number: "05-13", item: 13 },
    { seat_number: "05-15", item: 15 },
    { seat_number: "05-17", item: 17 },
    { seat_number: "05-19", item: 19 },
    { seat_number: "05--1", item: -1 },
    { seat_number: "05--1", item: -1 },
  ],
  [
    { seat_number: "06--1", item: -1 },
    { seat_number: "06--1", item: -1 },
    { seat_number: "06-18", item: 18 },
    { seat_number: "06-16", item: 16 },
    { seat_number: "06-14", item: 14 },
    { seat_number: "06-12", item: 12 },
    { seat_number: "06-10", item: 10 },
    { seat_number: "06-08", item: 8 },
    { seat_number: "06-06", item: 6 },
    { seat_number: "06-04", item: 4 },
    { seat_number: "06-02", item: 2 },
    { seat_number: "06-01", item: 1 },
    { seat_number: "06-03", item: 3 },
    { seat_number: "06-05", item: 5 },
    { seat_number: "06-07", item: 7 },
    { seat_number: "06-09", item: 9 },
    { seat_number: "06-11", item: 11 },
    { seat_number: "06-13", item: 13 },
    { seat_number: "06-15", item: 15 },
    { seat_number: "06-17", item: 17 },
    { seat_number: "06--1", item: -1 },
    { seat_number: "06--1", item: -1 },
    { seat_number: "06--1", item: -1 },
  ],
];

interface IData {
  seat_number: string;
  isClaimed: boolean;
  isVerified: boolean;
  uid: string;
}

interface ISeats extends IData {
  item: number;
}

function Seats() {
  const [data, setData] = useState<IData[]>([]);
  const { url: prefix } = useContext(MyContext);
  const url = `${prefix}/seats`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res);

      if (res.data.status) {
        setData(res.data.data);
      } else {
        window.location.href = "/login";
      }
    };

    fetchData();
  }, [url]);

  const seats = useMemo(() => {
    const m = layout.length,
      n = layout[0].length;
    const res: ISeats[][] = [...Array(m)].map(() => []);
    let emptyNumber = 0;
    for (let i = 0, j = 0; i < m * n; i++) {
      const rowNum = Math.floor(i / n);
      const colNum = i % n;
      let obj: ISeats = {
        seat_number: "",
        item: 0,
        isClaimed: false,
        isVerified: false,
        uid: "",
      };

      const temp = layout[rowNum][colNum];
      if (temp.item === -1) {
        obj = {
          ...temp,
          uid: emptyNumber++ + "",
          isClaimed: false,
          isVerified: false,
        };
      } else {
        obj = {
          ...data[j++],
          item: temp.item,
        };
      }

      res[rowNum].push(obj);
    }

    return res;
  }, [data]);

  return (
    <div>
      <span>座位分发与核销情况</span>
      <div className="wrapper">
        {seats.map((items, index) => {
          return (
            <div className="rows" key={index}>
              {items.map((item) => {
                const cn = classnames({
                  "cell-blank": item.item === -1,
                  "cell-used": item.isClaimed,
                  "cell-verified": item.isVerified,
                  cell: true,
                });
                return <div className={cn} key={item.uid}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Seats;
