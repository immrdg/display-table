import Row from "./Row";


function Table(params){

    return (
        <table bgcolor={"red"} border={"1"}>
            <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
            </tr>
            {
                params.products.map(function (ele){
                    return <Row product={ele}/>
                })
            }
        </table>
    )
}
export default Table;