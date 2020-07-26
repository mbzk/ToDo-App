

var list = document.getElementById("list")

function StDetail(){
var detail = document.getElementById("inp")
 

// creating li

var li = document.createElement("li")
var liText = document.createTextNode(inp.value)
li.appendChild(liText)






// creating delete button


var Delbtn = document.createElement("button")
var DelbtnText  = document.createTextNode("DELETE")

Delbtn.setAttribute("onclick","del(this)") 
Delbtn.setAttribute("class","delbtn") 
Delbtn.appendChild(DelbtnText)


li.appendChild(Delbtn)

// creating edit button

var EditBtn = document.createElement("button")
var EditBtnText = document.createTextNode("EDIT")
EditBtn.appendChild(EditBtnText)
EditBtn.setAttribute("class","editbtn")
EditBtn.setAttribute("onclick","EditDetail(this)")

li.appendChild(EditBtn)

list.appendChild(li)

inp.value = ""


}
 

function del(e){
e.parentNode.remove()
}


function DelAll(){
    list.innerHTML = ""
}

function EditDetail (e){

  var value = prompt("edit your detail",e.parentNode.firstChild.nodeValue)
    
  e.parentNode.firstChild.nodeValue = value;

}
