import { Card, CardHeader, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


const Invoices = () => {
    const columns = [
        {field: "id", headerName: "#ID", flex: 1},
        {field: "customer", headerName: "CUSTOMER", flex: 1},
        {field: "total", headerName: "TOTAL", flex: 1},
        {field: "issued", headerName: "ISSUED DATE", flex: 1},
        {field: "balance", headerName: "BALANCE", flex: 1},
        {field: "action", headerName: "ACTION", flex: 1}
    ]

    const rows = [
        {id: "#4910", customer: "Jordan Stevenson", total: "₦3428", issued: "22 Oct 2019", balance: "PAID", action: "work"},
        {id: "#4909", customer: "Maryjane Joe", total: "₦2872", issued: "18 Oct 2019", balance: "PAID", action: "work"},
        {id: "#4908", customer: "Lee Wandoski", total: "₦4077", issued: "01 Feb 2020", balance: "PAID", action: "work"},
        {id: "#4907", customer: "Olaa Paula", total: "₦2060", issued: "08 Dec 2019", balance: "PAID", action: "work"},
        {id: "#4906", customer: "Jordan Stevenson", total: "₦3428", issued: "22 Oct 2019", balance: "PAID", action: "work"},
        {id: "#4905", customer: "Maryjane Joe", total: "₦2872", issued: "18 Oct 2019", balance: "PAID", action: "work"},
        {id: "#4904", customer: "Lee Wandoski", total: "₦4077", issued: "01 Feb 2020", balance: "PAID", action: "work"},
        {id: "#4903", customer: "Olaa Paula", total: "₦2060", issued: "08 Dec 2019", balance: "PAID", action: "work"}
    ]


    return ( <>
        <div className="p-4 w-full">
            <Card>
                <CardHeader title="Filters" />
                <div className="px-4 w-full flex gap-6">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value="actions"
                        label="Actions"
                        sx={{borderRadius: 2}}
                    >
                        <MenuItem value="actions">Select status</MenuItem>
                    </Select>
                    <Select
                        labelId="demo-simple-select-label-second"
                        id="demo-simple-select-second"
                        value="actions"
                        label="Actions"
                        sx={{borderRadius: 2}}
                    >
                        <MenuItem value="actions">Invoice date</MenuItem>
                    </Select>
                </div>
            </Card>
            <Card>
                <div className="px-4 w-full">
                    <div className="my-4 flex gap-6">
                        <input type="text" className="p-3 rounded border border-[#DCDBE0] w-full max-w-[350px]" placeholder="Search Transactions"/>
                        <button className="px-5 w-fit py-3 bg-primary rounded-lg text-white mt-auto ml-auto">Create Invoice</button>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value="actions"
                            label="Actions"
                            sx={{borderRadius: 2}}
                        >
                            <MenuItem value="actions">Actions</MenuItem>
                        </Select>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 9 },
                        },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </Card>
        </div>
    </> );
}
 
export default Invoices;