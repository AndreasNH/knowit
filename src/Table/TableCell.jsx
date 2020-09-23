import React from "react";
import styles from './table.module.css';


const TableCell = ({ align = 'left', children }) => {
return <td className={styles.tableCell} style={{textAlign: align}}>{children}</td>;
};

export default TableCell;