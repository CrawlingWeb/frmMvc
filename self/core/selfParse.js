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
			
			//-------------------------------
			var regArr = [
				/\<\{\{each\(\$(\w+)\)(\s\S)\$(\w+)(\s\S)\$(\w+)\}\}\>/,
				/\<\{\{\/each\}\}\>/,
				/\<[{if($)}]>\/
			];
			var replace = [
				'<script>$.each("$1")</script>'
			
			];
			//--------------------------------
			for(var i=0;i<hasNeed;i++){
				var str=cArr.shift();
				var sA=str.match(reg);
				//替换值
				
				$.each(selfParse.storeVar,function(i,v){
					if(sA!=null&&sA!=undefined){
						if(v==sA[1]){
							content=content.replace(regRep,selfParse.storeValue[i])
						}
					}
				})
			}
			func.content(content);
		},
		setVar:function(key,val){
			selfParse.storeVar.push(key);
			selfParse.storeValue.push(val);
		}
};