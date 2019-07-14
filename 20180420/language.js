//chinese 
//face
L_TaiwanFace = new Array(); 
L_TaiwanFace[0] = "請患者微笑\n(等一下)以嘴巴為中心兩邊的微笑對稱嗎？"; 
L_TaiwanFace[1] = "正常微笑"; 
L_TaiwanFace[2] = "些微有點不一樣或不同"; 
L_TaiwanFace[3] = "只有一邊的嘴或臉顯示笑容(顯然兩邊不同)";
L_TaiwanFace[4] = "無法完成要求(微笑)";
//arm
L_TaiwanArm = new Array();
L_TaiwanArm[0] = "請患者將雙手舉起超過頭部\n(等一下)可以做到什麼程度？"; 
L_TaiwanArm[1] = "雙手雙臂都可以舉起"; 
L_TaiwanArm[2] = "一隻手臂高過另一隻(都有舉起但一高一低)";
L_TaiwanArm[3] = "只有一邊的手臂舉起";
L_TaiwanArm[4] = "無法完成要求";
//speak
L_TaiwanSpeak = new Array();
L_TaiwanSpeak[0] = "請患者複誦「今天天氣晴時多雲偶陣雨」\n(等一下)是否可以複誦？\n(分清楚)是否有斷斷續續、含糊或無法聽懂"; 
L_TaiwanSpeak[1] = "語音清晰"; 
L_TaiwanSpeak[2] = "語音含糊"; 
L_TaiwanSpeak[3] = "語音斷斷續續或無法聽懂";
L_TaiwanSpeak[4] = "無法完成要求";
//English
//face
L_EnglishFace = new Array(); 
L_EnglishFace[0] = "Ask her/him to smile\n(Wait)Was the smile equal on both sides of her/his mouth？"; 
L_EnglishFace[1] = "Normal smile"; 
L_EnglishFace[2] = "Slight difference in smile (possible difference)"; 
L_EnglishFace[3] = "Only on eside of mouth or face shows a smile (obvious difference)";
L_EnglishFace[4] = "Cannot complete request (to smile";
//arm
L_EnglishArm = new Array();
L_EnglishArm[0] = "Ask her/him to raise both arms above her/his head.\n(Wait)What was s/he able to do？"; 
L_EnglishArm[1] = "Both arms raised equally"; 
L_EnglishArm[2] = "One arm higher than other (both raised, but unequally)";
L_EnglishArm[3] = "Only one arm raised";
L_EnglishArm[4] = "Cannot complete request at all";
//speak
L_EnglishSpeak = new Array();
L_EnglishSpeak[0] = "Ask her/him to say,"The early bird catches the worm"\n(Wait)What was s/he able to repeat it correctly？\n(Clarity)Was it clurred, garbled, or not understandable？"; 
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
		for (var i = 0; i >= 4; i++) {
			document.getElementById('face0'+ i ).innerHTML = L_TaiwanFace[i];
		}
	}
	
}