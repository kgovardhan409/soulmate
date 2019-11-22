import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent{
    
    flag = false
    colorA = 'red'
    colorB = 'blue'

  constructor() { }


    array = [
      {
      name : "yangzi", 
       age : 22,
       Profession : "Actress",
       img : "assets/yangzi.jpg"
    },
    {
      name: "Sharan", 
     age: 19,
     Profession: "Student",
     img: "assets/sharan.jpg"
  },
  {
    name: "Arjun", 
   age: 23,
   Profession: "Student",
   img: "assets/arjun.jpg"
},
{
  name: "Arjun", 
 age: 23,
 Profession: "Student",
 img: "assets/arjun.jpg"
}
    ];
    trackElement(index: number, element: any) {
      return element ? element.guid : null
    }

  //   var i;
  //   // var createEle = "<figure>";
  //   //     createEle += imgArray;
  //   //     createEle += captionArray;
  //   //     createEle += "</figure>";
  //   document.getElementById('next').addEventListener('click', function(){
  //     console.log(arrayEle[1]);
  //     var htmlContent = '<section>';
  //   // for(var i=0; i<arrayEle.length; i++){
  //     htmlContent +="<figure><img height='500px' src='"+arrayEle[0].img+"' alt='"+arrayEle[0].img+"'>";
  //     htmlContent +="<figcaption>"+arrayEle[0].name.toUpperCase()+"</figcaption>";
  //     htmlContent +="<figcaption> Name & Age: "+arrayEle[0].name+arrayEle[0].age+"</figcaption>";
  //     htmlContent +="<figcaptifigureon> Profession: "+arrayEle[0].Profession+"</figcaption>";
  //     htmlContent +="</>";
  //     // }
  //     htmlContent +="</section>"
	// 	document.getElementById('mysection').innerHTML = htmlContent;
  //   });

  //   document.getElementById('previous').addEventListener('click', function(){
  //     console.log(arrayEle[2]);
  //     var htmlContent = '<section>';
  //   // for(var i=0; i<arrayEle.length; i++){
  //     htmlContent +="<figure><img height='500px' src='"+arrayEle[1].img+"' alt='"+arrayEle[1].img+"'>";
  //     htmlContent +="<figcaption>"+arrayEle[1].name.toUpperCase()+"</figcaption>";
  //     htmlContent +="<figcaption> Name & Age: "+arrayEle[1].name+arrayEle[1].age+"</figcaption>";
  //     htmlContent +="<figcaption> Profession: "+arrayEle[1].Profession+"</figcaption>";
  //     htmlContent +="</figure>";
  //     // }
  //     htmlContent +="</section>"
	// 	document.getElementById('mysection').innerHTML = htmlContent;

  //   })
  // }
  // vliiug(){

  // }
  
}
