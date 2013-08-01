//常用函数集合
var func={
	//获取根目录路径
	getRootpath:function(){
		var curWwwPath=window.document.location.href;
	    var pathName=window.document.location.pathname;
	    var pos=curWwwPath.indexOf(pathName);
    	var localhostPaht=curWwwPath.substring(0,pos);
    	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    
   		return (localhostPaht+projectName);
	},
	//获取相对的路径
	getRpath:function(dir){
		
		 var pathName=window.document.location.pathname;
		 if(dir!=undefined&&pathName!=dir){
    		pathName+=dir;
    		
    	}
    	return pathName;
	},
	//其他扩展函数
	getCurrentpath:function(){
		var curPath=window.document.location.href;
		return curPath;
	},
	//加载应用里面的index.js
	getApp:function(path){
		$.getScript("./self/apps/"+path+'/index.js');
	},
	//输出内容
	content:function(content){
		document.write(content);
	},
	//jquery想dom中写入字符串
	setHtml:function(str){
		var o=$(str);
		if(typeof o==object){
			o.html(str);
		}else{
			//提示信息，暂没有dialog窗口
			alert("元素没找到！");
		}
		
	}
};