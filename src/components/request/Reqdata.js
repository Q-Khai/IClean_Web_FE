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

const data = [
    {
      key: "1",
      name: "Mai Thanh Tỷ",
      img: {face2},
      mail: "mikety@gmail.com",
      service: "Dọn Dẹp",
      address: "Quận 8",
      status: "COMPLETE",
      date: "23/09/2023",
    },
  
    {
      key: "2",
      name: "Mai Thanh Tỷ",
      img: {face2},
      mail: "mikety@gmail.com",
      service: "Dọn Dẹp",
      address: "Quận 8",
      status: "COMPLETE",
      date: "23/09/2023",
    },
  
    {
      key: "3",
      name: "Mai Thanh Tỷ",
      img: {face2},
      mail: "mikety@gmail.com",
      service: "Dọn Dẹp",
      address: "Quận 8",
      status: "COMPLETE",
      date: "23/09/2023",
    },
    {
      key: "4",
      name: "Mai Thanh Tỷ",
      img: {face2},
      mail: "mikety@gmail.com",
      service: "Dọn Dẹp",
      address: "Quận 8",
      status: "COMPLETE",
      date: "23/09/2023",
    },
    {
      key: "5",
      name: "Mai Thanh Tỷ",
      img: {face2},
      mail: "mikety@gmail.com",
      service: "Dọn Dẹp",
      address: "Quận 8",
      status: "COMPLETE",
      date: "23/09/2023",
    },
  
    {
      key: "6",
      name: "Mai Thanh Tỷ",
      img: {face2},
      mail: "mikety@gmail.com",
      service: "Dọn Dẹp",
      address: "Quận 8",
      status: "COMPLETE",
      date: "23/09/2023",
      // name: (
      //   <>
      //     <Avatar.Group>
      //       <Avatar
      //         className="shape-avatar"
      //         shape="square"
      //         size={40}
      //         src={face6}
      //       ></Avatar>
      //       <div className="avatar-info">
      //         <Title level={5}>John Levi</Title>
      //         <p>john@gmail.com</p>
      //       </div>
      //     </Avatar.Group>{" "}
      //   </>
      // ),
      // function: (
      //   <>
      //     <div className="author-info">
      //       <Title level={5}>Lau Kính</Title>
      //       <p>Quận 10</p>
      //     </div>
      //   </>
      // ),
  
      // status: (
      //   <>
      //     <Button className="tag-pen">PENDING</Button>
      //   </>
      // ),
      // employed: (
      //   <>
      //     <div className="ant-employed">
      //       <span>11/10/2023</span>
      //       <a href="#pablo">Edit</a>
      //     </div>
      //   </>
      // ),
    },
  ];

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
import { DropOption } from 'components'
import { t } from "@lingui/macro"
import { Trans } from "@lingui/macro"
import { Link } from 'umi'
import styles from './List.less'
import face2 from "../assets/images/face-2.jpg";

const { confirm } = Modal

class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, ...tableProps } = this.props

    const columns = [
      {
        title: <Trans>Avatar</Trans>,
        dataIndex: 'avatar',
        key: 'avatar',
        width: '7%',
        fixed: 'left',
        render: face2 => <Avatar style={{ marginLeft: 8 }} src={face2} />,
      },
      {
        title: <Trans>Name</Trans>,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      // {
      //   title: <Trans>Mail</Trans>,
      //   dataIndex: 'mail',
      //   key: 'mail',
      // },
      {
        title: <Trans>Service</Trans>,
        dataIndex: 'service',
        width: '10%',
        key: 'service',
      },
      {
        title: <Trans>Gender</Trans>,
        dataIndex: 'isMale',
        key: 'isMale',
        width: '7%',
        render: text => <span>{text ? 'Male' : 'Female'}</span>,
      },
      {
        title: <Trans>Phone</Trans>,
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: <Trans>Email</Trans>,
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: <Trans>Address</Trans>,
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: <Trans>CreateTime</Trans>,
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: <Trans>Operation</Trans>,
        key: 'operation',
        fixed: 'right',
        width: '8%',
        render: (text, record) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: t`Update` },
                { key: '2', name: t`Delete` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
