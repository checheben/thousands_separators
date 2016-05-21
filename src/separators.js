'use strict';

function thousands_separators(num){
	//判断是否是数字
	var re = /^\d+(.\d+)?$/;
	
	if(re.test(num)){
		var str = ''+num;
		var numPoint = str.indexOf('.');
		var pre,suf;
		var strReturn = '';
		if(numPoint > 0){
			pre = str.substring(0,numPoint);
			suf = str.substring(numPoint);
		}else if(numPoint == 0){
			pre = '';
			suf = str.substring(1);
		}else{
			pre = str;
			suf = '';
		}
		
		if(pre){
			var len = pre.length;
			if(len<=3){
				strReturn = pre;
			}else{
				var mod = len%3;
				var arr = [];
				var iNum = mod;
				for(iNum;iNum+3<=len;iNum+=3){
						arr[arr.length] = pre.substring(iNum,iNum+3);
				}
				strReturn = arr.join(',');
				if(mod){
					strReturn = pre.substring(0,mod)+','+strReturn;
				}
			}
		}
		
		strReturn = strReturn+suf;
		alert(strReturn);
		//return strReturn;   
	}else{
		alert("not a number");
	}
}

module.exports = thousands_separators;
