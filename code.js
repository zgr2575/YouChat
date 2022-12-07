console.log("Project is no longer updated");
var messageSettings = {
  font: "Verdana",
  youbg: "lightgray",
  youcolor: "black",
  thembg: "white",
  themcolor: "black",
  yousound: "",
  themsound: "assets/category_bell/quiet_bell_notification.mp3",
  censor: true,
  emoticonToEmoji: true,
  maxMessages: 50
};
function notif(content) {
  var num = randomNumber(0, 999999999);
  textLabel("notif" + num, "");
  setPosition("notif" + num, 10, 10, 300);
  setStyle("notif" + num, "opacity: 0; transition: 0.2s; box-shadow: 0 5px 8px 3px rgba(0,0,0,0.4);");
  setProperty("notif" + num, "text-color", "black");
  setProperty("notif" + num, "background-color", "white");
  setProperty("notif" + num, "border-radius", 5);
  setProperty("notif" + num, "font-family", messageSettings.font);
  setProperty("notif" + num, "font-size", 15);
  innerHTML("notif" + num, content);
  setStyle("notif" + num, "opacity: 0; transform: translateY(-20px);");
  setTimeout(function () {
    setStyle("notif" + num, "opacity: 1; transform: translateY(0px);");
  }, 16);
  setTimeout(function () {
    setStyle("notif" + num, "opacity: 0; transform: scale(0.9);");
    setTimeout(function () {
      deleteElement("notif" + num);
    }, 200);
  }, 3000);
}



setTimeout(function() {
playSound("video-(10)-(audio-extractor.net).mp3");  
showElement("image1");
}, 1000);
setTimeout(function() {
 setScreen("loading");
 setScreen("LandingPage");
}, 5200);

var username;
var banned;
var adminq;
var name;
var pms;
var userid = getUserId();
var muted = false;
var devmode;
onEvent("button15", "click", function( ) {
  var Reason1 = prompt("Reason");
createRecord("DeleteAccount", {AccountName:username,Reason: Reason1}, function(record) {
  notif("Send Request");
  setScreen("select");
  notif(record);
});

});
onEvent("button1", "click", function( ) {
setScreen("Login");

});
onEvent("button7", "click", function( ) {
setScreen("chat");

});



onRecordEvent("Chat", function(record, eventType) {
setText("text_area2", getColumn("Chat","Show"));
});

setText("text_area2", getColumn("Chat","Show"));

onEvent("button3", "click", function( ) {
var message = getText("text_input3");
var toshow ="\n"+username + ": "+message; 
var censor = false;
var check1 = toshow.toLowerCase();
if(check1.includes("fuck")){
if(check1.includes("bitch")){
if(check1.includes("shit")){
if(check1.includes("ass")){
if(check1.includes("dick")){
if(check1.includes("tranny")){
if(check1.includes("f u")){
if(check1.includes("b i t c")){
if(check1.includes("s h i")){
if(check1.includes("a s s")){
if(check1.includes("d i c")){
if(check1.includes("trans")){
if(check1.includes("t r a n")){
if(check1.includes("gay")){
if(check1.includes("g a y")){

  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}

  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
else{
 createRecord("Chat", {Show:toshow,Name:username,ID:userid, admin:adminq,Censor:censor}, function(record) {
  setText("text_input3","");
}); 
}


});
onEvent("text_input3", "change", function( ) {
var message = getText("text_input3");
var toshow ="\n"+username + ": "+message; 
var censor = false;
var check1 = toshow.toLowerCase();

if(check1.includes("fuck")){
if(check1.includes("bitch")){
if(check1.includes("shit")){
if(check1.includes("ass")){
if(check1.includes("dick")){
if(check1.includes("tranny")){
if(check1.includes("f u")){
if(check1.includes("b i t c")){
if(check1.includes("s h i")){
if(check1.includes("a s s")){
if(check1.includes("d i c")){
if(check1.includes("trans")){
if(check1.includes("t r a n")){
if(check1.includes("gay")){
if(check1.includes("g a y")){

  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}

  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
  hideElement("text_input3");
  censor = true;
  createRecord("Chat", {Show:"\n"+"Moddorated",Censor:message,Name:username, ID:userid}, function(record) {
  notif("You are muted untill your message is reviwed");
  setKeyValue(userid, true, function () {
    muted = true;
  });
  
});
}
else{
 createRecord("Chat", {Show:toshow,Name:username,ID:userid, admin:adminq,Censor:censor}, function(record) {
  setText("text_input3","");
}); 
}
});
onEvent("button13", "click", function( ) {
  if(getText("text_input5") == ""){
    notif("Username required");
  }
  else{
	createRecord("Users", {Username:getText("text_input5"),Password:getText("text_input6"),ID:getUserId(),Name:getText("text_input7")}, function(record) {
	  username = getText("text_input1");
	  name = getText("text_input5");
	  setScreen("menu");
	});
  }
});
onEvent("button10", "click", function( ) {
   if(getText("text_input1") == ""){
     notif("Stop");
   }
   else{
     
   
readRecords("Users", {}, function(records) {
  for (var i =0; i < records.length; i++) {
    if(getText("text_input5") == records[i].Username){
      if(getText("text_input4") == records[i].Password){
name = records[i].name;
        if(records[i].admin == "true"){
          adminq=true;
          showElement("button5");
          setScreen("menu");
        }
        if (records[i].Banned=="true"){
          setScreen("Banned");
          banned = true;
        }
       
      }
    }
     else{
          setScreen("menu");
          notif("Logged in");
          username = getText("text_input1");
        
        }
  }
});
}
});

if (getUserId() == "kO55V/gZa4hAzH6grgGFZEz8qZg"){
  devmode = true;
}
onEvent("button12", "click", function( ) {
setScreen("Login");
});
onEvent("button11", "click", function( ) {
setScreen("signup");
});
onEvent("button17", "click", function( ) {
	setScreen("select");
});
onEvent("button19", "click", function( ) {
setScreen("signup");
});
onEvent("button20", "click", function( ) {
	setScreen("About");
});
onEvent("button21", "click", function( ) {
setScreen("select");
});
var Bounce;
timedLoop(1000, function() {
 
  if (getColumn("Disable", "Disabled") == "true"){
    setScreen("Disabled");
    Bounce = "true";
  
  }
 if (getColumn("Disable", "Disabled") == "false"){
   if (Bounce == "true"){
     setScreen("menu");
     Bounce = "false";
   }
    
    
  }
});
onEvent("button4", "click", function( ) {
setScreen("menu");
});
onEvent("button9", "click", function( ) {
setScreen("menu_account");
});
onEvent("button2", "click", function( ) {
setScreen("menu");
});
