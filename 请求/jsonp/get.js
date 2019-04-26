function creatXHR() {
  if(typeof XMLHttpRequest != "undefined"){
    return new XMLHttpRequest();
  }else if(typeof ActiveXObject != "undefined"){
    if(typeof arguements.callee.activeXString !="string"){
      var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],
      i,len;
      for(i = 0,len = versions.length;i<len;i++){
        try{
          new ActiveXObject(versions[i]);
          arguements.callee.activeXString == versions[i];
          break;
        }catch{ex}

      }

    }
    return new ActiveXObject(arguements.callee.activeXString);
  }else {
    throw new Error("NO XHR Object aviliable!");
  }
}
function handleResponse(response){
    //alert(response);
    console.log(response);
    var people = document.getElementsByClassName("people")[0];
    people.innerHTML = `${response.name}的年龄是${response.age}岁`;
}
// var xhr = new creatXHR();
// xhr.open("get","sur.json",true);
// xhr.send(null);
var script = document.createElement("script");
script.src = "sur.json?callback=handleResponse";
document.body.insertBefore(script,document.body.firstChild);
