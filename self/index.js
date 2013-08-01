//js入口，通过js入口调用
var appInit = {
	//---------------------初始化配置文件-------------
	//-----可以配置是否启动所有的应用，第一启动应用
	//-----默认弹窗样式default
	//
	//
	initConfig:{
		dialog:"default",
		initApplication:"1",
		runAllapp:false
	},
	//初始化启动项目
	runApp:function(settings){
		//主方法
		//---------------------设置参数
		if(settings.dialog!=undefined){appInit.initConfig.dialog=settings.dialog;}
		if(settings.initApplication!=undefined){appInit.initConfig.initApplication=settings.initApplication;}
		if(settings.runAllapp!=undefined){appInit.initConfig.runAllapp=settings.runAllapp;}
		//-------------------
		func.getApp(appInit.initConfig.initApplication);
	}
};

