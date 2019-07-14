var SFA = SAR = SSP = 0;
function disable(num){
	if(num == 1){
	    for (var i = 1; i <= 4; i++) {
	   		document.getElementById("face0" + i).disabled = true;	
	    }
	    for (var i = 1; i <= 4; i++) {
	   		document.getElementById("arm0" + i).disabled = true;	
	    }
	    for (var i = 1; i <= 4; i++) {
	   		document.getElementById("speak0" + i).disabled = true;	
	    }
	}else{
		if(num == 2){
		    for (var i = 1; i <= 4; i++) {
		   		document.getElementById("face0" + i).disabled = false;	
		    }
		}
	}
	if(SFA != 0){
	    for (var i = 1; i <= 4; i++) {
	   		document.getElementById("arm0" + i).disabled = false;	
	    }
	}
	if(SAR != 0){
	    for (var i = 1; i <= 4; i++) {
	   		document.getElementById("speak0" + i).disabled = false;	
	    }	
	}
}
function setFaceScore(score){
	document.getElementById('scoreF').innerHTML = score;
	SFA = score ;
}
function setArmScore(score){
	document.getElementById('scoreA').innerHTML = score;
	SAR = score;
}
function setSpeakScore(score){
	document.getElementById('scoreS').innerHTML = score;
	SSP = score;
	if((SFA != 0)&&(SAR != 0)&&(SSP != 0)){
		document.getElementById('totalscore').innerHTML = SFA + SAR + SSP;
	}
}
   //chinese
   //start
   L_TaiwanStart = "當準備好時按下「開始」鍵" 
   //face
   L_TaiwanFace = new Array(); 
   L_TaiwanFace[0] = "請患者微笑<br>(等一下)以嘴巴為中心兩邊的微笑對稱嗎？"; 
   L_TaiwanFace[1] = "正常微笑"; 
   L_TaiwanFace[2] = "些微有點不一樣或不同"; 
   L_TaiwanFace[3] = "只有一邊的嘴或臉顯示笑容(顯然兩邊不同)";
   L_TaiwanFace[4] = "無法完成要求(微笑)";
   //arm
   L_TaiwanArm = new Array();
   L_TaiwanArm[0] = "請患者將雙手舉起超過頭部<br>(等一下)可以做到什麼程度？"; 
   L_TaiwanArm[1] = "雙手雙臂都可以舉起"; 
   L_TaiwanArm[2] = "一隻手臂高過另一隻(都有舉起但一高一低)";
   L_TaiwanArm[3] = "只有一邊的手臂舉起";
   L_TaiwanArm[4] = "無法完成要求";
   //speak
   L_TaiwanSpeak = new Array();
   L_TaiwanSpeak[0] = "請患者複誦「今天天氣晴時多雲偶陣雨」<br>(等一下)是否可以複誦？<br>(分清楚)是否有斷斷續續、含糊或無法聽懂"; 
   L_TaiwanSpeak[1] = "語音清晰"; 
   L_TaiwanSpeak[2] = "語音含糊"; 
   L_TaiwanSpeak[3] = "語音斷斷續續或無法聽懂";
   L_TaiwanSpeak[4] = "無法完成要求";
   //English
   //start
   L_EnglishStart = "Tell me when you're ready."
   //face
   L_EnglishFace = new Array(); 
   L_EnglishFace[0] = "Ask her/him to smile<br>(Wait)Was the smile equal on both sides of her/his mouth？"; 
   L_EnglishFace[1] = "Normal smile"; 
   L_EnglishFace[2] = "Slight difference in smile (possible difference)"; 
   L_EnglishFace[3] = "Only on eside of mouth or face shows a smile (obvious difference)";
   L_EnglishFace[4] = "Cannot complete request (to smile)";
   // //arm
   L_EnglishArm = new Array();
   L_EnglishArm[0] = "Ask her/him to raise both arms above her/his head.<br>(Wait)What was s/he able to do？"; 
   L_EnglishArm[1] = "Both arms raised equally"; 
   L_EnglishArm[2] = "One arm higher than other (both raised, but unequally)";
   L_EnglishArm[3] = "Only one arm raised";
   L_EnglishArm[4] = "Cannot complete request at all";
   //speak
   L_EnglishSpeak = new Array();
   L_EnglishSpeak[0] = "Ask her/him to say,'The early bird catches the worm'<br>(Wait)What was s/he able to repeat it correctly？<br>(Clarity)Was it clurred, garbled, or not understandable？"; 
   L_EnglishSpeak[1] = "Said correctlly"; 
   L_EnglishSpeak[2] = "Slurred speech"; 
   L_EnglishSpeak[3] = "Garbled or not undersrandable speech";
   L_EnglishSpeak[4] = "Cannot complete request at all";
   
   //change language
   var languageNow;
   function chg_lan(lan){
      switch(lan){
         case 1:
            languageNow = "English";
            break;
         case 2:
            languageNow = "Chinese";
            break;
         default:
            alert("error");
            break;   
      }
      if(languageNow == 'Chinese'){
      	 document.getElementById('start').innerHTML = L_TaiwanStart;
         for (var i = 0; i <= 4; i++) {
            document.getElementById('face'+i ).innerHTML = L_TaiwanFace[i];
         }
         for (var i = 0; i <= 4; i++) {
            document.getElementById('arm'+i ).innerHTML = L_TaiwanArm[i];
         }
         for (var i = 0; i <= 4; i++) {
            document.getElementById('speak'+i ).innerHTML = L_TaiwanSpeak[i];
         }
      }else{
      	 document.getElementById('start').innerHTML = L_EnglishStart;
         for (var i = 0; i <= 4; i++) {
            document.getElementById('face'+i ).innerHTML = L_EnglishFace[i];
         }
         for (var i = 0; i <= 4; i++) {
            document.getElementById('arm'+i ).innerHTML = L_EnglishArm[i];
         }
         for (var i = 0; i <= 4; i++) {
            document.getElementById('speak'+i ).innerHTML = L_EnglishSpeak[i];
         }
      }  
   }
