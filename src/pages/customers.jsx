import { Card, CardHeader, Select, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
const Customers = () => {

    // const location = useLocation()
    const columns = [
        {field: "customer", headerName: "CUSTOMER", flex: 1},
        {field: "phone", headerName: "PHONE", flex: 1},
        {field: "email", headerName: "EMAIL", flex: 1},
        {field: "address", headerName: "ADDRESS", flex: 1},
        {field: "totalDebt", headerName: "TOTAL DEBT", flex: 1},
        {field: "action", headerName: "ACTION", flex: 1}
    ]

    const rows = [
        {id: 1, customer: "Benedetto Rossiter", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 2, customer: "Bertha Biner", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 3, customer: "Beverlie Krabbe", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 4, customer: "Bradan Rosebotham", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 5, customer: "Bree Kilday", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 6, customer: "Breena Gallemore", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 7,customer: "Jordan Stevenson", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 8, customer: "Bentlee Emblin", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"},
        {id: 9, customer: "Brockie Myles", phone: "0903 457 9801", email: "janedoe @gmail.com", address: "House 9, Olaseinde street.", totalDebt: "₦ 500 000", action: "work"}
    ]

    return ( <>
        <div className="p-4 w-full">
            <Card>
                <CardHeader title="Customers" />
                <div className="px-4 w-full">
                    <div className="my-4 flex gap-6">
                        <input type="text" className="p-3 rounded border border-[#DCDBE0] w-full max-w-[350px]" placeholder="Search Customers"/>
                        <button className="px-5 w-fit py-3 bg-primary rounded-lg text-white mt-auto ml-auto">Create Customer</button>
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
 
export default Customers;