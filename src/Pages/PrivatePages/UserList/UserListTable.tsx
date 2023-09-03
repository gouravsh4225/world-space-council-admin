import { Table } from "react-bootstrap";

export type TableColumnsType = {
  label: string;
  id: string;
};

type UserListTableType = {
  data: any;
  columns: TableColumnsType[];
};

const TableRowCell = (props: any) => {
  const { item, column } = props;
  const getValueFromObject = (item: any, column: any) => {
    const value = item[column.id];
    return value;
  };

  const value = getValueFromObject(item, column);
  return <td>{value}</td>;
};

const UserListTable = (props: UserListTableType) => {
  const { data, columns } = props;
  return (
    <Table bordered responsive="md" striped={true}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.id}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, dataIndex: number) => (
          <tr key={`table-body-tr-${dataIndex}`}>
            {columns.map((colsItem: any, colsIndex: number) => (
              <TableRowCell
                key={`Table-row-cell-${colsIndex}`}
                item={item}
                column={colsItem}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export { UserListTable };
