

function Row(params){
    return (
        <tr>
            <td>{params.product.ProductId}</td>
            <td>{params.product.ProductName}</td>
            <td>{params.product.ProductPrice}</td>
        </tr>
    )
}
export default Row;