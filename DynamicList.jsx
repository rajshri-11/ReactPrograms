function DynamicList()
{
	const weekdays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

	return(
		<div>
		Name of Days in a week : 
		<ul>
		{weekdays.map((days,index) =>(
			<li key={index}>{days}</li>
		 ))}
		</ul>
		</div>
		)
}
export default DynamicList