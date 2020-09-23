import React from "react";
import TableCell from "./TableCell";
import styles from "./table.module.css";

const TableRow = ({ columns = [], row }) => {
  return (
    <tr className={styles.tableRow}>
      {columns.map((column, index) => (
        <TableCell key={`table-cell-${column.key}-${index}`} align={column.align} >
          {row[column.key]}
        </TableCell>
      ))}
    </tr>
  );
};

export default TableRow;
