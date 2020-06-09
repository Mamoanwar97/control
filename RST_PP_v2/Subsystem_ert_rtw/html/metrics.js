function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtDW"] = {file: "D:\\Tracks\\Control\\RST_PP_v2\\Subsystem_ert_rtw\\Subsystem.c",
	size: 48};
	 this.metricsArray.var["rtM_"] = {file: "D:\\Tracks\\Control\\RST_PP_v2\\Subsystem_ert_rtw\\Subsystem.c",
	size: 4};
	 this.metricsArray.var["rtU"] = {file: "D:\\Tracks\\Control\\RST_PP_v2\\Subsystem_ert_rtw\\Subsystem.c",
	size: 16};
	 this.metricsArray.var["rtY"] = {file: "D:\\Tracks\\Control\\RST_PP_v2\\Subsystem_ert_rtw\\Subsystem.c",
	size: 8};
	 this.metricsArray.fcn["Subsystem_initialize"] = {file: "D:\\Tracks\\Control\\RST_PP_v2\\Subsystem_ert_rtw\\Subsystem.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["Subsystem_step"] = {file: "D:\\Tracks\\Control\\RST_PP_v2\\Subsystem_ert_rtw\\Subsystem.c",
	stack: 8,
	stackTotal: 8};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data;}
}
	 CodeMetrics.instance = new CodeMetrics();
