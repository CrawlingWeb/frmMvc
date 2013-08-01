//应用模板目录
var appUrl=func.getRpath('self/apps');
//模板引擎
var selfParse = {
		storeVar:[],
		storeValue:[],
		display:function(appName){
			appName=appName==undefined?"1":appName
			var url=appUrl+'/'+appName+'/index'+'.'+config.ext;
			$.get(url,function(data){
				selfParse.parse(data);
			})
		},
		//正则替换页面内容---------------现在只是显示字符串数据
		parse:function(content){
			//用正则替换
			var cArr=content.split("}>");
			var hasNeed=cArr.length-1;//有几个变量在模板中
			var reg=/\<\{\{\$(\w+)\}/;
			var needLen=[];
			var regRep=/\<\{\{\$\w+\}\}\>/;
			for(var i=0;i<hasNeed;i++){
				var str=cArr.shift();
				var sA=str.match(reg);
				$.each(selfParse.storeVar,function(i,v){
					if(sA!=null&&sA!=undefined){
						if(v==sA[1]){
							content=content.replace(regRep,selfParse.storeValue[i])
						}
					}
				})
			}
                        //正则替换集合
                        var regs=[
                            /\{xunhuan\(\"(\w+)\",\"(\w+)\"\)\}/,
                            /\{if\(\)\}/
                        ];
                        
                        var replaces=[
                            function($1,$2,$3){return selfParse.xunhuan($2,$3)},
                        ];
                        
                        for(var i=0;i<regs.length;i++){
                            content=content.replace(regs[i],replaces[i]);
                        }
                        
			func.content(content);
		},
                //循环
                xunhuan:function(name,type){
                   
                    var rdata="";
                      switch(type){
                          case 'table':
                          default:
                              rdata= func.table(name);
                              break;
                      }
                    return rdata;
                },
		setVar:function(key,val){
			selfParse.storeVar.push(key);
			selfParse.storeValue.push(val);
		}
};