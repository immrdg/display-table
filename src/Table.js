import Row from "./Row";


function Table(params){

    return (
        <table key={11} bgcolor={"red"} border={"1"}>
            <thead>
            <tr>
                <td>Product Id</td>
                <td>Product Name</td>
                <td>Product Price</td>
            </tr>
            </thead>
            <tbody>
            {
                params.products.map(function (ele,index){
                    return <Row key={index} product={ele}/>
                })
            }
            </tbody>
        </table>
    )
}
export default Table;