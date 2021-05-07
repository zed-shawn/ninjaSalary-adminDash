import React, { useCallback } from "react";
import { useSortBy, useTable } from "react-table";
import { useDispatch, useSelector } from "react-redux";
import * as ModalActions from "../store/modalHandler";

export default function Table() {
  const dispatch = useDispatch();
  const openModal = useCallback(
    (data) => {
      dispatch(ModalActions.openModal(data));
    },
    [dispatch]
  );

  const data = useSelector((state) => state.data.transactions);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Withdrawn",
        accessor: "withAmount",
      },
      {
        Header: "Net Amount",
        accessor: "netAmount",
      },
    ],
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);
  return (
    <table
      {...getTableProps()}
      style={{
        border: "solid 3px white",
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
      }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px white",
                  borderRight: "solid .1px gray",
                  background: "#302c5c",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Como",
                  fontSize: "17px",
                  padding: "5px",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => {
                openModal(row.original.name);
              }}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      //                      border: "solid 1px gray",
                      borderRight: "solid 0.1px gray",
                      borderBottom: "solid 1px white",
                      background: "#676585",
                      fontFamily: "Como",
                      color: "#ebebeb",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
