load("stack.js");

var  numberstack = new Stack();

function evaluate() {
	var pop1 = 0;
	var pop2 = 0;
	var result;
	var token = userinput.split(" ");
	print(token);
	for(var i=0; i<token.length; ++i) {
		var var1 = token[i];
		print(var1);
		var res = var1.charAt(0);
		if(res >=' 0' && res <= '11') {
			numberstack.push(var1);
		}

	pop1 = parseInt(numberstack.pop());
	pop2 = parseInt(numberstack.pop());
	result = pop2 + pop1;
	print(result);
	}
}
var userinput = ("2 4 6 8 10");
print(evaluate(userinput));
	
