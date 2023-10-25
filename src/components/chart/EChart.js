import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";

function EChart() {
  const { Title, Paragraph } = Typography;

  const items = [
    {
      Title: "3,6K",
      user: "Người dùng",
    },
    {
      Title: "215",
      user: "Đăng kí",
    },
    {
      Title: "772",
      user: "Đơn hàng",
    },
    {
      Title: "532,000",
      user: "Doanh thu",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Đơn hàng</Title>
        <Paragraph className="lastweek">
          so với tháng trước <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
          We have created multiple options for you to put together and customise
          into pixel perfect pages.
        </Paragraph>
        <Row gutter>
          {items.map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
