
/*

Putting comments between the opening and closing angle asterix /* symbols means they will not be interpreted by the code. 

https://en.wikipedia.org/wiki/Contract_bridge_probabilities


How many ways can 52 cards be dealt to four players? The answer is 39. These distributions are shown below. 


*/

var allShapes = [
	4432, 
	5332,
	5431, 
	5422, 
	4333, 
	6322, 
	6421, 
	6331, 
	5521, 
	4441, 
	7321, 
	6430,
	5440, 
	5530,
	6511,
	6520,
	7222,
	7411,
	7420,
	7330,
	8221,
	8311,
	7510,
	8320,
	6610,
	8410,
	9211,
	9310,
	9220,
	7600,
	8500,
	10210,
	9400,
	10111,
	10300,
	11110,
	11200,
	12100,
	13000
]



/* 12 cases */
var shape4432 = [
	4432,
	4423,
	4342,
	4324,
	4243,
	4234,
	3442,
	3424,
	3244,
	2443,
	2434,
	2344
]

var shape5332 = [
	5332,
	5323,
	5233, 
	3532, 
	3523,
	3352,
	3325,
	3253,
	3235,
	2533,
	2353,
	2335,
]

/* 12.931%,  24 cases */
var shape5431 = [
	5431, 
	5413,
	5341, 
	5314,
	5143, 
	5134, 
	4531, 
	4513, 
	4351, 
	4315,
	4153, 
	4135,
	3541, 
	3514, 
	3451, 
	3415,
	3154, 
	3145,
	1543, 
	1534, 
	1453, 
	1435,
	1354, 
	1345
] 
	

var shape5422 = [
	5422, 
	5242,
	5224,
	4522, 
	4252,
	4225
]


var shape4333 = [
	4333, 
	3433, 
	3343, 
	3334
]
