function arrayToTable(body, head=[], foot=[]){
	var str = "";
	for(var row of body){
		str += "<tr>";
		for(var cell of row){
			str += "<td>"+cell+"</td>";
		}
		str += "</tr>";
	}
	return str;
}

function mapInterval(val, min, max){
	return (val-min)/(max-min);
}
