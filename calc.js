let res = document.getElementById("inputxt");

let calfun=(number)=>
{
	res.value+=number;
}
//var eqa=()=>{
	//try{
		//res.value=eval(res.value);
	//}
	//catch(err){
		//alert("Enter the valid result");
	//}
//}
function eqa()
{
	try{
		res.value=eval(res.value);
	}
	catch(err){
		alert("Enter the valid result");
	}
}
//function calfun(number)
//{
//	res.value+=number;
//}

function clr()
{
	res.value=" ";
}
function del()
{
	res.value= 	res.value.slice(0,-1);
}