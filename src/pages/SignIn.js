import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
} from "antd";
import signinbg from "../assets/images/panner.png";
import { PinteredOutLined, Home } from '../components/Icons';
import { DribbbleOutlined, TwitterOutlined, InstagramOutlined, GithubOutlined } from "@ant-design/icons";
import axios from "axios";
// function onChange(checked) {
//   console.log(`switch to ${checked}`);
// }

// async function login() {
//   console.warn(email, password)
//   let item = { email, password };
//   let result = await fetch("https://iclean.azurewebsites.net/api/v1/auth", {
//     method: 'POST',

//   })
// }
// const { Title } = Typography;
// const { Header, Footer, Content } = Layout;

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

const template = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
      fill="#111827"
      className="fill-muted"
    ></path>
    <path
      data-v-4ebdc598=""
      d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const profile = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const signup = [
  <svg
    data-v-4ebdc598=""
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      data-v-4ebdc598=""
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
      fill="#111827"
      className="fill-muted"
    ></path>
  </svg>,
];
const signin = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      className="fill-muted"
      d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"
    />
  </svg>,
];


const SignIn = () => {
  const { Title } = Typography;
  const { Header, Footer, Content } = Layout;

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    // function onChange(checked) {
    //   console.log(`switch to ${checked}`);
    // }

    const history = useHistory();
    // useEffect(() => {
    //   if (localStorage.getItem('admin')) {
    //     history.push("/dashboard")
    //   }
    // }, [])

    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
    
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleApi = () => {
      console.log({ email, password})
      axios.post('https://iclean.azurewebsites.net/api/v1/auth', {
        email: email,
        password: password
      })
      .then(result => {
        console.log( result.data )
        // alert ('Đăng Nhập Thành Công')
        localStorage.setItem('token', result.data.token)
        history.pushState("/dashboard")
      })
      .catch(error => {
        alert('Thất Bại Rồii')
        console.log(error)
      })
    }

    // async function login() {
    //   console.warn(email, password)
    //   let item = { email, password };
    //   let result = await fetch("https://iclean.azurewebsites.net/api/v1/auth", {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json",
    //       "accept": "/"
    //     },
    //     body: JSON.stringify(item)
    //   });
    //   result = await result.json();
    //   localStorage.setItem(JSON.stringify(result))
    //   history.pushState("/dashboard")
    // }

    // const handleGoogleSignInClick = async () => {
    //   signInWithPopup(auth, provider)
    //     .then((res) => {
    //       setValue(res.user.email);
    //       localStorage.setItem('email', res.user.email);
    //       localStorage.setItem('uid', res.user.uid);
    //       const data = {
    //         idToken: res.user.accessToken,
    //       };
    //       api
    //         .post('/login', data)
    //         .then((response) => {
    //           console.log('API return:', response);
    //           const { accessToken, refreshToken, accountdb } = response.data;
    //           const tokens = {
    //             accessToken: accessToken,
    //             refreshToken: refreshToken,
    //           };
    //           console.log('role', accountdb);
    //           //Lưu token vào local storage
    //           localStorage.setItem('tokens', JSON.stringify(tokens));
    //           localStorage.setItem('role', accountdb.role || accountdb);

    //           if (accountdb === 'unknown') {
    //             window.location.href = '/sign-up';
    //           } else if (accountdb === 'customer') {
    //             window.location.href = '/customer/menu-creator';
    //           } else if (accountdb.role === 'creator') {
    //             if (accountdb.status == 1) {
    //               window.location.href = '/creator';
    //             } else {
    //               window.location.href = '/pending-creator';
    //             }
    //           } else {
    //             window.location.href = '/profile';
    //           }
    //         })
    //         .catch((error) => {
    //           alert('Đăng nhập thất bại rồi!');
    //         });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };

    const navitems = [
      {
        label: (
          <Link to="/">
            <Home />
            <span> Home</span>
          </Link>
        ),
        key: '1',
      },
    ];

    const menu = [
      { label: 'Company', key: '1' },
      { label: 'About Us', key: '2' },
      { label: 'Teams', key: '3' },
      { label: 'Products', key: '4' },
      { label: 'Blogs', key: '5' },
      { label: 'Pricing', key: '6' },
    ];

    const media = [
      { label: <Link to="#">{<DribbbleOutlined />}</Link>, key: '1' },
      { label: <Link to="#">{<TwitterOutlined />}</Link>, key: '2' },
      { label: <Link to="#">{<InstagramOutlined />}</Link>, key: '3' },
      { label: <Link to="#">{<PinteredOutLined />}</Link>, key: '4' },
      { label: <Link to="#">{<GithubOutlined />}</Link>, key: '5' },
    ];
    return (
      <>
        <div className="layout-default layout-signin">
          <Header>
            <div className="header-col header-brand">
              <h5>ICLEAN</h5>
            </div>
            <div className="header-col header-nav">
              <Menu mode="horizontal" defaultSelectedKeys={["1"]} item={navitems}>
                <Menu.Item key="1">
                  <Link to="/dashboard">
                    {template}
                    <span> Dashboard</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/sign-up">
                    {signup}
                    <span> Đăng Ký</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/sign-in">
                    {signin}
                    <span> Đăng Nhập</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
          <Content className="signin">
            <Row gutter={[24, 0]} justify="space-around">
              <Col
                xs={{ span: 24, offset: 0 }}
                lg={{ span: 6, offset: 2 }}
                md={{ span: 12 }}
              >
                <Title className="mb-15">Đăng Nhập</Title>
                <Title className="font-regular text-muted" level={5}>
                  Nhập email và mật khẩu của bạn
                </Title>
                <Form
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  layout="vertical"
                  className="row-col"
                >
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input value={email} placeholder="Email" onChange={handleEmail} />
                  </Form.Item>

                  <Form.Item
                    className="username"
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input value={password} placeholder="Password" onChange={handlePassword} />
                  </Form.Item>

                  {/* <Form.Item
                    name="remember"
                    className="aligin-center"
                    valuePropName="checked"
                  >
                    <Switch defaultChecked onChange={onChange} />
                    Remember me
                  </Form.Item> */}

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%", backgroundColor: "#AD82D9", borderColor: "#AD82D9" }}
                      onClick={handleApi}
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                  <p className="font-semibold text-muted">
                    Don't have an account?{" "}
                    <Link to="/sign-up" className="text-dark font-bold">
                      Sign Up
                    </Link>
                  </p>
                </Form>
              </Col>
              <Col
                className="sign-img"
                style={{ padding: 12 }}
                xs={{ span: 24 }}
                lg={{ span: 12 }}
                md={{ span: 12 }}
              >
                <img src={signinbg} alt="" />
              </Col>
            </Row>
          </Content>
          <Footer>
            {/* <Menu mode="horizontal">
              <Menu.Item>Company</Menu.Item>
              <Menu.Item>About Us</Menu.Item>
              <Menu.Item>Teams</Menu.Item>
              <Menu.Item>Products</Menu.Item>
              <Menu.Item>Blogs</Menu.Item>
              <Menu.Item>Pricing</Menu.Item>
            </Menu> */}
            <Menu mode="horizontal" items={menu} />
            <Menu mode="horizontal" className="menu-nav-social">
              <Menu.Item>
                <Link to="#">{<DribbbleOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<TwitterOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<InstagramOutlined />}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                  </svg>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="#">{<GithubOutlined />}</Link>
              </Menu.Item>
            </Menu>
            <p className="copyright">
              {" "}
              Copyright © 2023 ICLEAN by <a href="#pablo">ICLEAN Team</a>.{" "}
            </p>
          </Footer>
        </div>
      </>
    );
  // }
};
export default SignIn;
