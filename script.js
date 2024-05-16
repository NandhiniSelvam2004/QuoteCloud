
//selecting popupbox and overlay and button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup.button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


  var cancelpopup=document.getElementById("Cancel-popup")

    cancelpopup.addEventListener("click",function(event){
        event.preventDefault()
        popupoverlay.style.display="none"
        popupbox.style.display="none"

    })      

    var container=document.querySelector(".container")
    var addquote=document.getElementById("Add-Quote")
    var quotetype=document.getElementById("Quote-Type-input")
    var quotebytype=document.getElementById("Quote-By-input")
    var quoteinput=document.getElementById("Quote-input")

      addquote.addEventListener("click",function(event){
      event.preventDefault()
      var div=document.createElement("div")
      div.setAttribute("class","quotes-container")
      div.innerHTML=`<h2>${quotetype.value}</h2>
      <h5>${quotebytype.value}</h5>
      <p>${quoteinput.value}</p>
      <button onclick="deletequote(event)">Delete</button>`
      container.append(div)
      popupoverlay.style.display="none"
        popupbox.style.display="none"
      
      
    })

    function deletequote(event)
    {
      event.target.parentElement.remove()
    }