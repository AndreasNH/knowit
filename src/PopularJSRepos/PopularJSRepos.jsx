import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Table from "../Table";
import "./styles.module.css";

const PopularJSRepos = ({ data, pageSize }) => {
  const [page, setPage] = useState(0);
  const [paginatedList, setPaginatedList] = useState([]);
  useEffect(() => {
    setPaginatedList(
      data.items.slice(page * pageSize, page * pageSize + pageSize)
    );
  }, [page, data, pageSize]);
  return (
    <>
    <h2>Popular JavaScript Libraries</h2>
      <Table
        columns={[
          { key: "name", label: "Name" },
          { key: "description", label: "Description" },
          { key: "stargazers_count", label: "Stars" },
          { key: "open_issues_count", label: "Issues", align: "right" },
        ]}
        rows={paginatedList}
      />
      <Pagination
        {...{
          size: data.items.length,
          pageSize,
          page,
          setPage,
        }}
      />
    </>
  );
};
export default PopularJSRepos;
