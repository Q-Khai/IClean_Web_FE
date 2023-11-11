import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/iClean_logo.png";
// import { Billing, Categories, Customer, Dashboard, Profile, Signout, Tables } from '~/components/Icons';

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const tables = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11C11.5523 4 12 3.55228 12 3C12 2.44772 11.5523 2 11 2H9Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5C4 3.89543 4.89543 3 6 3C6 4.65685 7.34315 6 9 6H11C12.6569 6 14 4.65685 14 3C15.1046 3 16 3.89543 16 5V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10ZM7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44772 15 7 15H7.01C7.56228 15 8.01 14.5523 8.01 14C8.01 13.4477 7.56228 13 7.01 13H7ZM10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H10Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const billing = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M4 4C2.89543 4 2 4.89543 2 6V7H18V6C18 4.89543 17.1046 4 16 4H4Z"
        fill={color}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V9ZM4 13C4 12.4477 4.44772 12 5 12H6C6.55228 12 7 12.4477 7 13C7 13.5523 6.55228 14 6 14H5C4.44772 14 4 13.5523 4 13ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H10C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12H9Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const rtl = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const profile = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const manager = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18.25C0 19.3547 1.11917 20.25 2.5 20.25H17.5C18.8808 20.25 20 19.3547 20 18.25C20 16.694 20 14.15 20 12.696C20 11.7293 19.1358 10.9013 17.9475 10.7287C16.1858 10.472 13.1483 10.03 11.43 9.78067C10.4842 9.64267 9.51583 9.64267 8.57 9.78067C6.85166 10.03 3.81416 10.472 2.0525 10.7287C0.864165 10.9013 0 11.7293 0 12.696V18.25ZM11.9233 11.2073L13.1742 15.012C13.3383 15.5113 13.1183 16.0413 12.6133 16.364C12.1867 16.636 11.5142 17.0653 11.0475 17.364C10.435 17.7547 9.565 17.7547 8.9525 17.364C8.48583 17.0653 7.81333 16.636 7.38667 16.364C6.88167 16.0413 6.66167 15.5113 6.82584 15.012L8.07667 11.2073L2.35083 12.04C1.955 12.098 1.66667 12.374 1.66667 12.696V18.25C1.66667 18.618 2.04 18.9167 2.5 18.9167C5.98667 18.9167 14.0133 18.9167 17.5 18.9167C17.96 18.9167 18.3333 18.618 18.3333 18.25C18.3333 16.694 18.3333 14.15 18.3333 12.696C18.3333 12.374 18.045 12.098 17.6492 12.04L11.9233 11.2073ZM10.1358 11.012C10.045 11.01 9.955 11.01 9.86417 11.012L8.44417 15.3333L9.9925 16.3213C9.99666 16.3247 10.0033 16.3247 10.0075 16.3213L11.5558 15.3333L10.1358 11.012ZM10 0.25C7.01083 0.25 4.58333 2.192 4.58333 4.58333C4.58333 6.97467 7.01083 8.91667 10 8.91667C12.9892 8.91667 15.4167 6.97467 15.4167 4.58333C15.4167 2.192 12.9892 0.25 10 0.25ZM10 1.58333C12.07 1.58333 13.75 2.92733 13.75 4.58333C13.75 6.23933 12.07 7.58333 10 7.58333C7.93 7.58333 6.25 6.23933 6.25 4.58333C6.25 2.92733 7.93 1.58333 10 1.58333Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const customer = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 4.5C12.5 6.98528 10.4853 9 8 9C5.51472 9 3.5 6.98528 3.5 4.5C3.5 2.01472 5.51472 0 8 0C10.4853 0 12.5 2.01472 12.5 4.5ZM10.5 4.5C10.5 5.88071 9.38071 7 8 7C6.61929 7 5.5 5.88071 5.5 4.5C5.5 3.11929 6.61929 2 8 2C9.38071 2 10.5 3.11929 10.5 4.5Z" fill="#667085" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.9231C0 13.0996 3.09957 10 6.92308 10H9.07692C12.9004 10 16 13.0996 16 16.9231C16 18.0701 15.0701 19 13.9231 19H2.07692C0.92987 19 0 18.0701 0 16.9231ZM2 16.9231C2 14.2041 4.20414 12 6.92308 12H9.07692C11.7959 12 14 14.2041 14 16.9231C14 16.9656 13.9656 17 13.9231 17H2.07692C2.03444 17 2 16.9656 2 16.9231Z" fill="#667085" />
      <path d="M16.9198 18.0973C16.8164 18.4981 17.0774 19 17.4913 19H17.9231C19.0701 19 20 18.0701 20 16.9231C20 13.0996 16.9004 10 13.0769 10C12.9347 10 12.8829 10.1975 13.0036 10.2727C13.9494 10.8614 14.7705 11.6314 15.4182 12.5343C15.4621 12.5955 15.5187 12.6466 15.5835 12.685C17.0301 13.5424 18 15.1195 18 16.9231C18 16.9656 17.9656 17 17.9231 17H17.4494C17.1985 17 17 17.2106 17 17.4615C17 17.6811 16.9721 17.8941 16.9198 18.0973Z" fill="#667085" />
      <path d="M12.919 6.96308C12.974 6.85341 13.0645 6.76601 13.1729 6.70836C13.9624 6.28814 14.5 5.45685 14.5 4.5C14.5 3.54315 13.9624 2.71186 13.1729 2.29164C13.0645 2.23399 12.974 2.14659 12.919 2.03692C12.6396 1.48001 12.2684 0.977121 11.8252 0.548096C11.623 0.352311 11.7185 0 12 0C14.4853 0 16.5 2.01472 16.5 4.5C16.5 6.98528 14.4853 9 12 9C11.7185 9 11.623 8.64769 11.8252 8.4519C12.2684 8.02288 12.6396 7.51999 12.919 6.96308Z" fill="#667085" />
    </svg>,
  ];

  const helper = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70068 10.3287C8.69525 10.3287 9.64907 9.80194 10.3523 8.86425C11.0556 7.92657 11.4507 6.6548 11.4507 5.32872C11.4507 4.00264 11.0556 2.73087 10.3523 1.79319C9.64907 0.855504 8.69525 0.32872 7.70068 0.32872C6.70612 0.32872 5.75229 0.855504 5.04903 1.79319C4.34577 2.73087 3.95068 4.00264 3.95068 5.32872C3.95068 6.6548 4.34577 7.92657 5.04903 8.86425C5.75229 9.80194 6.70612 10.3287 7.70068 10.3287ZM1.45068 20.3287C1.45068 20.3287 0.200684 20.3287 0.200684 18.6621C0.200684 16.9954 1.45068 11.9954 7.70068 11.9954C13.9507 11.9954 15.2007 16.9954 15.2007 18.6621C15.2007 20.3287 13.9507 20.3287 13.9507 20.3287H1.45068ZM13.9507 2.82872C13.9507 2.60771 14.0165 2.39575 14.1337 2.23946C14.251 2.08318 14.4099 1.99539 14.5757 1.99539H19.5757C19.7414 1.99539 19.9004 2.08318 20.0176 2.23946C20.1348 2.39575 20.2007 2.60771 20.2007 2.82872C20.2007 3.04973 20.1348 3.2617 20.0176 3.41798C19.9004 3.57426 19.7414 3.66205 19.5757 3.66205H14.5757C14.4099 3.66205 14.251 3.57426 14.1337 3.41798C14.0165 3.2617 13.9507 3.04973 13.9507 2.82872ZM14.5757 6.99539C14.4099 6.99539 14.251 7.08318 14.1337 7.23946C14.0165 7.39574 13.9507 7.60771 13.9507 7.82872C13.9507 8.04973 14.0165 8.2617 14.1337 8.41798C14.251 8.57426 14.4099 8.66205 14.5757 8.66205H19.5757C19.7414 8.66205 19.9004 8.57426 20.0176 8.41798C20.1348 8.2617 20.2007 8.04973 20.2007 7.82872C20.2007 7.60771 20.1348 7.39574 20.0176 7.23946C19.9004 7.08318 19.7414 6.99539 19.5757 6.99539H14.5757ZM17.0757 11.9954C16.9099 11.9954 16.751 12.0832 16.6337 12.2395C16.5165 12.3957 16.4507 12.6077 16.4507 12.8287C16.4507 13.0497 16.5165 13.2617 16.6337 13.418C16.751 13.5743 16.9099 13.6621 17.0757 13.6621H19.5757C19.7414 13.6621 19.9004 13.5743 20.0176 13.418C20.1348 13.2617 20.2007 13.0497 20.2007 12.8287C20.2007 12.6077 20.1348 12.3957 20.0176 12.2395C19.9004 12.0832 19.7414 11.9954 19.5757 11.9954H17.0757ZM17.0757 16.9954C16.9099 16.9954 16.751 17.0832 16.6337 17.2395C16.5165 17.3957 16.4507 17.6077 16.4507 17.8287C16.4507 18.0497 16.5165 18.2617 16.6337 18.418C16.751 18.5743 16.9099 18.6621 17.0757 18.6621H19.5757C19.7414 18.6621 19.9004 18.5743 20.0176 18.418C20.1348 18.2617 20.2007 18.0497 20.2007 17.8287C20.2007 17.6077 20.1348 17.3957 20.0176 17.2395C19.9004 17.0832 19.7414 16.9954 19.5757 16.9954H17.0757Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const signin = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
        fill={color}
      ></path>
    </svg>,
  ];

  const signup = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      key={0}
    >
      <path
        d="M0,2A2,2,0,0,1,2,0H8a2,2,0,0,1,2,2V8a2,2,0,0,1-2,2H2A2,2,0,0,1,0,8Z"
        transform="translate(4 4)"
        fill={color}
      />
      <path
        d="M2,0A2,2,0,0,0,0,2V8a2,2,0,0,0,2,2V4A2,2,0,0,1,4,2h6A2,2,0,0,0,8,0Z"
        fill={color}
      />
    </svg>,
  ];

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        {/* <span>Muse Dashboard</span> */}
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
            <span
              className="icon"
              style={{
                background: page === "dashboard" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Bảng điều khiển</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/Customer">
            <span
              className="icon"
              style={{
                background: page === "customer" ? color : "",
              }}
            >
              {customer}
            </span>
            <span className="label">Khách hàng</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/Manager">
            <span
              className="icon"
              style={{
                background: page === "manager" ? color : "",
              }}
            >
              {manager}
            </span>
            <span className="label">Quản lý</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/Employee">
            <span
              className="icon"
              style={{
                background: page === "helper" ? color : "",
              }}
            >
              {helper}
            </span>
            <span className="label">Nhân viên</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/tables">
            <span
              className="icon"
              style={{
                background: page === "tables" ? color : "",
              }}
            >
              {tables}
            </span>
            <span className="label">Yêu cầu</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="6">
          <NavLink to="/billing">
            <span
              className="icon"
              style={{
                background: page === "billing" ? color : "",
              }}
            >
              {billing}
            </span>
            <span className="label">Thanh toán</span>
          </NavLink>
        </Menu.Item>
        {/* <Menu.Item key="4">
          <NavLink to="/rtl">
            <span
              className="icon"
              style={{
                background: page === "rtl" ? color : "",
              }}
            >
              {rtl}
            </span>
            <span className="label">RTL</span>
          </NavLink>
        </Menu.Item> */}

        {/* <Menu.Item className="menu-item-header" key="5">
          Account Pages
        </Menu.Item> */}
        <Menu.Item key="7">
          <NavLink to="/profile">
            <span
              className="icon"
              style={{
                background: page === "profile" ? color : "",
              }}
            >
              {profile}
            </span>
            <span className="label">Profile</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="8">
          <NavLink to="/sign-in">
            <span className="icon">{signin}</span>
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="9">
          <NavLink to="/sign-up">
            <span className="icon">{signup}</span>
            <span className="label">Sign Up</span>
          </NavLink>
        </Menu.Item>
      </Menu>
      {/* <div className="aside-footer">
        <div
          className="footer-box"
          style={{
            background: color,
          }}
        >
          <span className="icon" style={{ color }}>
            {dashboard}
          </span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type="primary" className="ant-btn-sm ant-btn-block">
            DOCUMENTATION
          </Button>
        </div>
      </div> */}
    </>
  );
}

export default Sidenav;
