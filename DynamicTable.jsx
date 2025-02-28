function DynamicTable()
{
	// an array of objects
	const productllist = [
			{pid : 'p101',productname : 'Laptop',price:25000,quantity:12},
			{pid : 'p102',productname : 'Monitor',price:2500,quantity:13},
			{pid : 'p103',productname : 'Keyboard',price:150,quantity:12},
			{pid : 'p104',productname : 'Mouse',price:150,quantity:14},
			{pid : 'p105',productname : 'Printer',price:1500,quantity:15},
			{pid : 'p106',productname : 'HDD',price:2500,quantity:20},
			{pid : 'p107',productname : 'Scanner',price:3500,quantity:12},
			{pid : 'p108',productname : 'Camera',price:25000,quantity:12},
			{pid : 'p109',productname : 'Microphone',price:250,quantity:12},

		]

	return(
		<div>
			Product List:
			<table border="1" >
				<thead>
					<tr>
						<th>Product Id </th>
						<th>Product Name</th>
						<th>Price(in Rs) </th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
				{productllist.map(product =>
					<tr key={product.pid}>
						<td>{product.pid}</td>
						<td>{product.productname}</td>
						<td>{product.price}</td>
						<td>{product.quantity}</td>
					</tr>
					)}
				</tbody>
			</table>
		</div>
		)
}
export default DynamicTable