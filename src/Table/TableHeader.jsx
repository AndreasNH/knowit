import React from "react";
import styles from './table.module.css';

const TableHeader = ({ columns }) => {
  return (
    <tr>
      {columns.map((column) => {
        return <th className={styles.tableHeader} key={`table-header-${column.key}`}>{column.label}</th>;
      })}
    </tr>
  );
};

export default TableHeader;
