
var i=0;
 
var items=["bread","milk","veg_curry1","veg_curry2","chicken_curry","chicken_pizza","veg_pizza" ,"bread_egg" ,"egg_curry"]
var relation=["bread","milk","veg && !pizza","veg && !pizza" ,"chicken" ,"chicken && pizza||pizza","veg && pizza||pizza","bread && egg","egg" ]
items.forEach(myFunction);

function myFunction(item) {
i++;
var div = document.createElement("div");
var checkbox=document.createElement("input");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("name", "items");
checkbox.setAttribute("id", item+i);
checkbox.setAttribute("value", item);

div.appendChild(checkbox);
var img=document.createElement("img");
 img.setAttribute("src", item+".jpg");
 img.setAttribute("alt", item);
 img.setAttribute("width", "200px");
 img.setAttribute("height", "200px");
 div.appendChild(img);
 div.setAttribute("ng-show", relation[i-1]);
 div.setAttribute("width","20%");
 var parent=document.getElementById("div1");
 parent.appendChild(div);
}

