function DynamicListFromObjects()
{
	// an array of objects
	const productllist = [
			{pid : 'p101',productname : 'Laptop'},
			{pid : 'p102',productname : 'Monitor'},
			{pid : 'p103',productname : 'Keyboard'},
			{pid : 'p104',productname : 'Mouse'},
			{pid : 'p105',productname : 'Printer'},
			{pid : 'p106',productname : 'HDD'},
			{pid : 'p107',productname : 'Scanner'},
			{pid : 'p108',productname : 'Camera'},
			{pid : 'p109',productname : 'Microphone'},

		]
	return(
		<div>
			Product Name: 
			<ul>
				{productllist.map(product =>
					<li key={product.pid}> {product.productname} </li>
					)}
			</ul>
		</div>

		)

}
export default DynamicListFromObjects
