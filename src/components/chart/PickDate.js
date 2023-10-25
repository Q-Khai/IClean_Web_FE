import { DatePicker, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;
const PickDate = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    {/* <RangePicker showTime /> */}
    {/* <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" /> */}
  </Space>
);
export default PickDate;