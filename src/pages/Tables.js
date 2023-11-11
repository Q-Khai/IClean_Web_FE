import { Row, Col, Card, Radio, Table, Upload, message, Progress, Button, Avatar, Typography, Tabs, Modal, Input } from "antd";

import { ToTopOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import PickDate from "../components/chart/PickDate";
import React, { useEffect, useState } from 'react';
// import BookingModal  from "../components/modals/BookingModal"

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";
import { api } from "../services/axios";

const { Title } = Typography;


const Booking = () => {
  const [openModal, setOpenModal] = useState(false);
}
const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

// table code start
const columns = [
  {
    title: "TÊN",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "DỊCH VỤ",
    dataIndex: "function",
    key: "function",
    // render:(completed) =>{
    //   return <p>{completed?'Complete':'Pending'}</p>
    // },
    filters: [
      {
        text: 'Dọn Dẹp',
        value: 'Dọn Dẹp',
      },
      {
        text: 'Lau Kính',
        value: 'Lau Kính',
      },
      {
        text: 'Sửa Máy Lạnh',
        value: 'Sửa Máy Lạnh',
      },
    ],
    onFilter: (value, record) => {
      return record.function == value
      // filterSearch: true
    },
    width: '20%',
  },

  {
    title: "TRẠNG THÁI",
    key: "status",
    dataIndex: "status",
    // sorter: (record1, record2) => {
    //   return record1.status > record2.status
    // }
  },
  {
    title: "NGÀY ĐĂNG",
    key: "employed",
    dataIndex: "employed",
    sorter: (a, b) => new Date(a.employed) - new Date(b.employed),
  },
];

//data ALL
const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Mai Thanh Tỷ</Title>
            <p>mikety@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 8</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          COMPLETE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23-09-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Lê Kim An</Title>
            <p>Anbabie@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 1</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">REJECT</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>05-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nguyễn Mỹ Kim</Title>
            <p>mykim12@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 3</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          COMPLETE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nguyễn Thiên Hương</Title>
            <p>huongcute@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 1</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>01-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nhật Linh</Title>
            <p>linhwibu@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Sửa Máy Lạnh</Title>
          <p>Bình Thạnh</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">REJECT</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23-09-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "7",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nguyễn Mỹ Kim</Title>
            <p>mykim12@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 3</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          COMPLETE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>03-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "8",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nguyễn Thiên Hương</Title>
            <p>huongcute@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 1</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>01-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "9",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nhật Linh</Title>
            <p>linhwibu@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Sửa Máy Lạnh</Title>
          <p>Bình Thạnh</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">REJECT</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23-09-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "10",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "11",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "12",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "13",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "14",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "15",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "16",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11-10-2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];

//data Reject
const dataR = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Lê Kim An</Title>
            <p>Anbabie@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 1</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">REJECT</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>05/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nhật Linh</Title>
            <p>linhwibu@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Sửa Máy Lạnh</Title>
          <p>Bình Thạnh</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">REJECT</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/09/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face5}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nhật Linh</Title>
            <p>linhwibu@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Sửa Máy Lạnh</Title>
          <p>Bình Thạnh</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">REJECT</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/09/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

];

//data Pending
const dataP = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nguyễn Thiên Hương</Title>
            <p>huongcute@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 1</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>01/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face4}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Nguyễn Thiên Hương</Title>
            <p>huongcute@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Dọn Dẹp</Title>
          <p>Quận 1</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>01/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "7",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "8",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "9",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
  {
    key: "10",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face6}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>John Levi</Title>
            <p>john@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Lau Kính</Title>
          <p>Quận 10</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-pen">PENDING</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/10/2023</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },
];

// project table start
const project = [
  {
    title: "COMPANIES",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "BUDGET",
    dataIndex: "age",
  },
  {
    title: "STATUS",
    dataIndex: "address",
  },
  {
    title: "COMPLETION",
    dataIndex: "completion",
  },
];
const dataproject = [
  {
    key: "1",

    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Spotify Version</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$14,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={30} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Progress Track</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$3,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={10} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Jira Platform Errors</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">Not Set</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">done</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={100} size="small" format={() => "done"} />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "4",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}> Launch new Mobile App</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$20,600</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress
            percent={50}
            size="small"
            status="exception"
            format={() => "50%"}
          />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "5",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Web Dev</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$4,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">working</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={80} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },

  {
    key: "6",
    name: (
      <>
        <Avatar.Group>
          <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
          <div className="avatar-info">
            <Title level={5}>Redesign Online Store</Title>
          </div>
        </Avatar.Group>
      </>
    ),
    age: (
      <>
        <div className="semibold">$2,000</div>
      </>
    ),
    address: (
      <>
        <div className="text-sm">canceled</div>
      </>
    ),
    completion: (
      <>
        <div className="ant-progress-project">
          <Progress percent={0} size="small" />
          <span>
            <Link to="/">
              <img src={pencil} alt="" />
            </Link>
          </span>
        </div>
      </>
    ),
  },
];


const Tables = () => {

  //----------------call API
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  // const [dataSource, setDataSource] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get("/booking");
  //       const filterBookings = response.data.data.content.bookingStatus(
  //         (booking) =>
  //           booking.bookingStatus !== "Đã nhận" && booking.bookingStatus !== "Đang đợi"
  //       );
  //       setCustomerList(filterBookings);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 850);
  //   fetchData();
  // });

  // hiện đang bị lỗi 
  // useEffect(() => {
  //   // Gọi API ở đây
  //   fetch(`https://iclean.azurewebsites.net/api/v1/booking?page=${page}&size=${pageSize}&sort=renterName_asc`)
  //     .then((response) => response.json())
  //     .then((apiData) => {
  //       setData(apiData); // Cập nhật dữ liệu sau khi gọi API thành công
  //       setLoading(false); // Đã tải xong
  //     })
  //     .catch((error) => {
  //       console.error('Lỗi khi gọi API:', error);
  //       setLoading(false); // Đã tải xong, có lỗi
  //     });
  // }, []); // [] đảm bảo useEffect chỉ gọi một lần khi component được tạo


  // useEffect(() => {
  //   setLoading(true)
  //   fetch("....api")
  //   .then(response => response.json())
  //   .then(data => {
  //     setDataSource(data)
  //   }).catch(err => {
  //     console.log(err)
  //   }).finally(()=> {
  //     setLoading(false)
  //   })
  // })

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  //Modal
  // const [open, setOpen] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');
  // const showModal = () => {
  //   setOpen(true);
  // };
  // const handleOk = () => {
  //   setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setOpen(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };
  // const handleCancel = () => {
  //   console.log('Clicked cancel button');
  //   setOpen(false);
  // };
  //-------------------------------------------------------------------------------
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const rowEvents = {
    onclick: (e, row) => {
      console.log(row)
      setModalInfo(row)
      toggleTrueFalse()
    }
  }

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  }

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalInfo.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button type="primary" success onclick={handleClose}>Chấp nhận</Button>
          <Button type="primarry" danger>Từ chối</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const [openModal, setOpenModal] = useState(false);

  // const [BookingData, setBookingData] = useState({
  //   name: "",
  //   title: "",
  //   description: "",
  //   image: "",
  //   additionalNotes: "",
  // });

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            {/* <PickDate /> */}
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Danh Sách Yêu Cầu"
            >
              {/* <PickDate /> */}


              <div className="table-responsive">
                <div>
                  <Tabs defaultActiveKey="1" style={{ paddingLeft: '25px' }}>
                    <Tabs.TabPane tab="Tất cả" key="1">
                      <Table
                        loading={loading}
                        columns={columns}
                        dataSource={data}
                        rowEvents={rowEvents}
                        pagination={{
                          current: page,
                          pageSize: pageSize,
                          onChange: (page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                            //make the api call here with page size
                          }
                        }}
                        className="ant-border-space"
                      />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Chưa duyệt" key="2">
                      <Table
                        loading={loading}
                        columns={columns}
                        dataSource={dataP}
                        // onClick={showModal}
                        pagination={{
                          current: page,
                          pageSize: pageSize,
                          onChange: (page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                          }
                        }}
                        className="ant-border-space"
                      />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Từ chối" key="3">
                      <Table
                        loading={loading}
                        columns={columns}
                        dataSource={dataR}
                        // onClick={showModal}
                        pagination={{
                          current: page,
                          pageSize: pageSize,
                          onChange: (page, pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                          }
                        }}
                        className="ant-border-space"
                      />
                    </Tabs.TabPane>
                  </Tabs>
                </div>

                <div>
                  <Input className="header-search" placeholder="Search..." prefix={<SearchOutlined />} />
                </div>
            </div>

            {/* <BookingModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                examData={examData}
                selectedServices={selectedServices}
              /> */}
          </Card>

          <Card
            bordered={false}
            className="criclebox tablespace mb-24"
            title="Projects Table"
            extra={
              <>
                <Radio.Group onChange={onChange} defaultValue="all">
                  <Radio.Button value="all">All</Radio.Button>
                  <Radio.Button value="online">ONLINE</Radio.Button>
                  <Radio.Button value="store">STORES</Radio.Button>
                </Radio.Group>
              </>
            }
          >
            <div className="table-responsive">
              <Table
                columns={project}
                dataSource={dataproject}
                pagination={false}
                className="ant-border-space"
              />
            </div>
            <div className="uploadfile pb-15 shadow-none">
              <Upload {...formProps}>
                <Button
                  type="dashed"
                  className="ant-full-box"
                  icon={<ToTopOutlined />}
                >
                  Click to Upload
                </Button>
              </Upload>
            </div>
          </Card>

        </Col>
      </Row>
    </div >
    </>
  );
}

export default Tables;
