import React from "react";
import styles from "./BookingModal.module.scss";

const BookingModal = ({ open, onClose, examData, selectedServices }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className={styles.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.modalContainer}
      >
        <p className={styles.closeBtn} onClick={onClose}>
          X
        </p>
        <div className={styles.InfText}>Nội dung khám</div>
        <div className={styles.container}>
          <div className={styles.element}>
            <h5>1. Khám tổng quát</h5>
            <table>
              <tr>
                <th>Cân nặng:</th>
                <td>{examData.weight} Kg</td>
              </tr>
              <th>Nhiệt độ:</th>
              <td>{examData.temperature} độ C</td>
              <tr>
                <th>Biểu hiện lâm sàng:</th>
                <td>{examData.symptoms}</td>
              </tr>
              <th>Chuẩn đoán:</th>
              <td>{examData.diagnosis}</td>
              <tr>
                <th>Ghi chú:</th>
                <td>{examData.additionalNotes}</td>
              </tr>
            </table>
            <h5>2. Yêu cầu dịch vụ</h5>
            {selectedServices.map((item, index) => (
              <div key={index} className={styles.service}>
                {item.name}
              </div>
            ))}
          </div>
          <div className={styles.imageBird}>
            <img
              src="https://vnn-imgs-f.vgcloud.vn/2019/12/31/14/bai-thuoc-tu-chim-se-chua-nam-gioi-liet-duong-it-tinh.jpg"
              className={styles.image}
            />
            <div className={styles.idBrid}>ID: 1016781</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
