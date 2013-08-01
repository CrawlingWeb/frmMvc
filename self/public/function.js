//常用函数集合
var func={
	//获取根目录路径
	getRootpath:function()
        {
		var curWwwPath=window.document.location.href;
	    var pathName=window.document.location.pathname;
	    var pos=curWwwPath.indexOf(pathName);
    	var localhostPaht=curWwwPath.substring(0,pos);
    	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    
   		return (localhostPaht+projectName);
	},
	//获取相对的路径
	getRpath:function(dir)
        {
		
		 var pathName=window.document.location.pathname;
		 if(dir!=undefined&&pathName!=dir){
                    pathName+=dir;
                }
    	return pathName;
	},
	//其他扩展函数
	getCurrentpath:function()
        {
		var curPath=window.document.location.href;
		return curPath;
	},
	//加载应用里面的index.js
	getApp:function(path)
        {
		$.getScript("./self/apps/"+path+'/index.js');
	},
	//输出内容
	content:function(content)
        {
		document.write(content);
	},
	//jquery想dom中写入字符串
	setHtml:function(str)
        {
		var o=$(str);
		if(typeof o==object){
			o.html(str);
		}else{
			//提示信息，暂没有dialog窗口
			alert("元素没找到！");
		}
		
	},
        //循环遍历获得表格
        table:function(name,id,kls)
        {
             
            var table="";
            kls=func.chkNull(kls)?kls:'default';
            table+='<table class="'+kls+'" id="'+id+'" border="1">';
            if(name==""||name==undefined||name==null)
            {
                table+='<tr></td>没有任何数据可显示</td></tr>';
            }else{
                var wai="";
                $.each(selfParse.storeVar,function(i,v){
                    if(v==name){
                        var value=selfParse.storeValue[i];
                        var obj=eval("("+value+")");
                        var tr="";
                       $.each(obj,function(m,n){
                           if(typeof(n)=='object'){
                               $.each(n,function(k,l){
                                   
                                  tr+='<tr>'
                                   if(typeof(l)=='object'){
                                       var t="";
                                        $.each(l,function(g,p){
                                           t+= '<td>'+g+':'+p+'</td>';
                                        })
                                   }
                                   tr+=t+'</tr>';
                               })
                           }else{
                               tr+='<tr><td>'+m+':'+n+'</td></tr>'
                           }
                           
                       })
                       wai+=tr;
                    }
                   
                })
                table+=wai;
            }
            table+='</table>';
            return table;
        },
         //生成表单
        form:function()
        {
            
        },
        //加载js并执行
        require:function(jsName){
            $.getScript(jsName);
        },
        chkNull:function(value){
            if(value!=undefined&&value!=null||value!=""){
                return true;
            }else{
                return false;
            }
        }
};