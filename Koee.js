// ** tien dien
 h = function(b){
 if(b<=50){
   console.log("gia tien la "+(b*2000))
 }
  else{if(b>=51&&b<=100){
        console.log("gia tien la "+((50*2000)+((b-50)*1800)))
  }else{if(b>=101&&b<=200){
   console.log("gia tien la "+((50*2000)+(50*1800)+((b-100)*1500)))
   }else{if(b>=200){
       console.log("gia tien la "+((50*2000)+(50*1800)+(100*1500)+((b-200)*1400)))
    }
   }
  }
 }
}
// ****  
a = function( g){
  arg=""
  for(i=0;i<g;i++){
    arg=arg+'*'
    console.log(arg)
  } 
}
b =function(x){
  let arg="\n"
  for(i=0;i<x;i++){
    //arg=""
    for(j=0;j<x;j++){
      arg=arg+"*"
    }
    arg+='\n'
  }
  console.log(arg)
}
c = function(h){
  let ans="\n"
  for(i=h;i>0;i--){    
  //  arg=""
    for(j=0;j<i;j++){
      ans=ans+"*"
    }
   ans+="\n"
  }
   console.log(ans)
}
// ***PTB2
function ketqua()
{
   var a = parseInt(prompt("Nhập số a "));
   var b = parseInt(prompt("Nhập số b "));
   var c = parseInt(prompt("Nhập số c "));
   var x1,x2,delta;
   delta=(b*b-4*a*c);
  console.log(delta)
  if(delta==0){
    x1=-b/(2*a);
    console.log("phuong trinh co nghiem kep"+x1);
  }
  else{if(delta<0){
    console.log("phuong trinh vo nghiem");
  }
       else{
          x1 = (-b - Math.sqrt(delta)) / (2 * a);
          x2 = (-b + Math.sqrt(delta)) / (2 * a);
         console.log("phuong trinh co 2 nghiem phan biet "+" x1: "+ x1 + " x2: " + x2)
       }
 }
}
   ketqua();
//  ***dao tu trong js
function magic(str){
  var newString="";
  for(var i=str.length - 1;i>=0;i--){
    newString+= str[i];
  }
  return newString;
}
magic()
