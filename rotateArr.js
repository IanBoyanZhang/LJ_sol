var rotate = function(num, k){
  // create cir_stack
  var c1 = [];
  var c2 = [];
  var l = num.length;


  if(l <= 1){
    
  }else{
    k = k%l;
    for(var i = 0; i < k; i+=1){
       c1.push(num.pop());
    }

    for(i = k; i < l ; i+=1){
       c2.push(num.pop());
    }

    for(i = 0; i < k; i+=1){
      num.push(c1.pop());
    }

    for(i = k; i < l; i+=1){
      num.push(c2.pop());
    }
  }
  
}
var num =[1, 2, 3, 4, 5, 6, 7];
rotate(num, 3);
console.log(num);

num = [-1, 2];
rotate(num, 3);
console.log(num);

