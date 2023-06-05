function myFunction(sw)
{
	var a = Number(document.getElementById("a").value);
	var b = Number(document.getElementById("b").value);
	var fa = Number(document.getElementById("fa").value);
	var fb = Number(document.getElementById("fb").value);
	var xi = Number(document.getElementById("xi").value);

	var resultFa = valorFa(a);
	var resultFb = valorFb(b);
	var resultXi =  valorXi(a,b);
 

	if(sw != 0)
	{
		document.getElementById("fa").value = resultFa;
		document.getElementById("fb").value = resultFb;
		document.getElementById("xi").value = resultXi;

		document.getElementById("iteraciones").innerHTML = "Los años para que la poblacion llegue a los 500 es de aproximadamente " + resultXi + " años";

	}
	else
	{
		document.getElementById("a").value = "";
		document.getElementById("b").value = "";
		document.getElementById("fa").value = "";
		document.getElementById("fb").value = "";
		document.getElementById("xi").value = "";
	}


}

function valorFa(a)
{
	var valorfa = (5*a) + (2*Math.exp(0.1*a)) - 500;

	return valorfa;
}

function valorFb(b)
{
	var valorfb = (5*b) + (2*Math.exp(0.1*b)) - 500;

	return valorfb;
}

function valorXi(a,b)
{
	var xi = b - ((((a-b)) * valorFb(b)) / (valorFa(a) - valorFb(b)))

	return xi;
}