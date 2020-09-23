import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./table.module.css";

const Table = ({ columns = [], rows = [], align}) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <tbody>
        <TableHeader {...{ columns }} />
        {rows.map((row, index) => (
          <TableRow key={`table-row-${index}`} {...{ columns, row }} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
