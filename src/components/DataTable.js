import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';

function DataTable(props) {
  const columns = [{
    name: "id",
    label: "ID",
    options:{ 
        filter:false,
        search:false
    }
   },
   {
    name: "name",
    label: "Name",
    options:{ 
        filter:false
    }
   },
   {
    name: "num",
    label: "Num",
    options:{ 
        filter:false,
        search:false
    }
   },
   {
    name: "type",
    label: "Type",
    options:{
        search:false,
        customBodyRender: (value) => <>{value.join(", ")}</>
    }
   },
   {
    name: "weaknesses",
    label: "Weaknesses",
    options:{ 
        search:false,
        customBodyRender: (value) => <>{value.join(", ")}</>
    }
   },
   {
    name: "id",
    label: "Action",
    options:{ 
        search:false,
        filter:false,
        customBodyRender: (value) => {
            return <Button variant="contained" color="primary" href={`details/${value}` }>Detail</Button>
        }    
    }
   }
];

  const options = {
    filter: true,
    filterType: "multiselect",
    print : false,
    download: false,
    viewColumns: false,
    selectableRows: false 

  };

  return (
    <MUIDataTable
      title={"Pokemon"}
      data={props.data}
      columns={columns}
      options={options}
    />
  );
}

export default DataTable;
