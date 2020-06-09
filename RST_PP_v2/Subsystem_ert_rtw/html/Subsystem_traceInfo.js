function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/1//S(z) */
	this.urlHashMap["System_20200609_2352_36:5"] = "Subsystem.c:38,51,67&Subsystem.h:41";
	/* <S1>/R(z) */
	this.urlHashMap["System_20200609_2352_36:12"] = "Subsystem.c:39,61&Subsystem.h:40";
	/* <S1>/Sum1 */
	this.urlHashMap["System_20200609_2352_36:4"] = "Subsystem.c:43";
	/* <S1>/T(z) */
	this.urlHashMap["System_20200609_2352_36:3"] = "Subsystem.c:40,55&Subsystem.h:39";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "Subsystem"};
	this.sidHashMap["Subsystem"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "System_20200609_2352_36:13"};
	this.sidHashMap["System_20200609_2352_36:13"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "System_20200609_2352_36:14"};
	this.sidHashMap["System_20200609_2352_36:14"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "System_20200609_2352_36:15"};
	this.sidHashMap["System_20200609_2352_36:15"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/1//S(z)"] = {sid: "System_20200609_2352_36:5"};
	this.sidHashMap["System_20200609_2352_36:5"] = {rtwname: "<S1>/1//S(z)"};
	this.rtwnameHashMap["<S1>/R(z)"] = {sid: "System_20200609_2352_36:12"};
	this.sidHashMap["System_20200609_2352_36:12"] = {rtwname: "<S1>/R(z)"};
	this.rtwnameHashMap["<S1>/Sum1"] = {sid: "System_20200609_2352_36:4"};
	this.sidHashMap["System_20200609_2352_36:4"] = {rtwname: "<S1>/Sum1"};
	this.rtwnameHashMap["<S1>/T(z)"] = {sid: "System_20200609_2352_36:3"};
	this.sidHashMap["System_20200609_2352_36:3"] = {rtwname: "<S1>/T(z)"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "System_20200609_2352_36:16"};
	this.sidHashMap["System_20200609_2352_36:16"] = {rtwname: "<S1>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
