import React from 'react';
import MUIDataTable, { MUIDataTableProps } from 'mui-datatables';

export interface DatatableProps extends MUIDataTableProps {}

export const Datatable: React.FC<DatatableProps> = (props) => {
  return <MUIDataTable {...props} />;
};
