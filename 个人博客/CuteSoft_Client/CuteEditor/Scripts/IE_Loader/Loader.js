var OxOdf51=["undefined","Microsoft.XMLHTTP","readyState","onreadystatechange","","document","length","element \x27","\x27 not found","returnValue","preventDefault","cancelBubble","stopPropagation","onchange","oninitialized","command","commandui","commandvalue","oncommand","string","_fireEventFunction","event","parentNode","_IsCuteEditor","True","readOnly","_IsRichDropDown","null","value","selectedIndex","nodeName","TR","cells","display","style","nextSibling","innerHTML","\x3Cimg src=\x22","/Load.ashx?type=image\x26file=t-minus.gif\x22\x3E","onclick","CuteEditor_CollapseTreeDropDownItem(this,\x22","\x22)","none","/Load.ashx?type=image\x26file=t-plus.gif\x22\x3E","CuteEditor_ExpandTreeDropDownItem(this,\x22","//TODO: event not found? throw error ?","all","UNSELECTABLE","on","tabIndex","-1","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","head","script","language","javascript","type","text/javascript","src","caller","arguments","parent","top","opener","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","CuteEditor_GetEditor(this).ExecImageCommand(this.getAttribute(\x27Command\x27),this.getAttribute(\x27CommandUI\x27),this.getAttribute(\x27CommandArgument\x27),this)","CuteEditor_GetEditor(this).PostBack(this.getAttribute(\x27Command\x27))","this.onmouseout();CuteEditor_GetEditor(this).DropMenu(this.getAttribute(\x27Group\x27),this)","ResourceDir","Theme","/Load.ashx?type=theme\x26theme=","\x26file=all.png","/Images/blank2020.gif","IMG","alt","title","Command","Group","ThemeIndex","width","20px","height","backgroundImage","url(",")","backgroundPosition","0 -","px","className","separator","CuteEditorButton","onmouseover","CuteEditor_ButtonCommandOver(this)","onmouseout","CuteEditor_ButtonCommandOut(this)","onmousedown","CuteEditor_ButtonCommandDown(this)","onmouseup","CuteEditor_ButtonCommandUp(this)","oncontextmenu","ondragstart","PostBack","ondblclick","_ToolBarID","_CodeViewToolBarID","_FrameID"," CuteEditorFrame"," CuteEditorToolbar","buttonInitialized","isover","CuteEditorButtonOver","CuteEditorButtonDown","CuteEditorDown","border","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","(","href","location",",DanaInfo=",",","+","scriptProperties","GetScriptProperty","/Load.ashx?type=scripts\x26file=IE_Implementation\x26culture=","Culture","/Load.ashx?type=scripts\x26file=EditorExtension\x26culture=","CuteEditorImplementation","function","POST","\x26getModified=1\x26_temp=","loadScript","status","responseText","GET","\x26modified=","Failed to load impl code!","block","contentEditable","body","cursor","InitializeCode","no-drop","CuteEditorInitialize"];function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxOdf51[0]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxOdf51[0]){return  new ActiveXObject(OxOdf51[1]);} ;} catch(x){return null;} ;} ;function LoadXMLAsync(Oxa5c,Ox288,Ox235,Oxa5d){var Oxe7=CreateXMLHttpRequest();function Oxa5e(){if(Oxe7[OxOdf51[2]]!=4){return ;} ;Oxe7[OxOdf51[3]]= new Function();var Ox290=Oxe7;Oxe7=null;Ox235(Ox290);} ;Oxe7[OxOdf51[3]]=Oxa5e;Oxe7.open(Oxa5c,Ox288,true);Oxe7.send(Oxa5d||OxOdf51[4]);} ;function Window_GetElement(Ox1a8,Ox9a,Ox240){var Ox29=Ox1a8[OxOdf51[5]].getElementById(Ox9a);if(Ox29){return Ox29;} ;var Ox31=Ox1a8[OxOdf51[5]].getElementsByName(Ox9a);if(Ox31[OxOdf51[6]]>0){return Ox31.item(0);} ;if(Ox240){throw ( new Error(OxOdf51[7]+Ox9a+OxOdf51[8]));} ;return null;} ;function Event_PreventDefault(Ox245){Ox245=Event_GetEvent(Ox245);Ox245[OxOdf51[9]]=false;if(Ox245[OxOdf51[10]]){Ox245.preventDefault();} ;} ;function Event_CancelBubble(Ox245){Ox245=Event_GetEvent(Ox245);Ox245[OxOdf51[11]]=true;if(Ox245[OxOdf51[12]]){Ox245.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox245){Ox245=Event_GetEvent(Ox245);Event_PreventDefault(Ox245);return Event_CancelBubble(Ox245);} ;function CuteEditor_AddMainMenuItems(Ox66a){} ;function CuteEditor_AddDropMenuItems(Ox66a,Ox671){} ;function CuteEditor_AddTagMenuItems(Ox66a,Ox673){} ;function CuteEditor_AddVerbMenuItems(Ox66a,Ox673){} ;function CuteEditor_OnInitialized(editor){} ;function CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f){} ;function CuteEditor_OnChange(editor){} ;function CuteEditor_FilterCode(editor,Ox26b){return Ox26b;} ;function CuteEditor_FilterHTML(editor,Ox283){return Ox283;} ;function CuteEditor_FireChange(editor){window.CuteEditor_OnChange(editor);CuteEditor_FireEvent(editor,OxOdf51[13],null);} ;function CuteEditor_FireInitialized(editor){window.CuteEditor_OnInitialized(editor);CuteEditor_FireEvent(editor,OxOdf51[14],null);} ;function CuteEditor_FireCommand(editor,Ox4d,Ox4e,Ox4f){var Ox13e=window.CuteEditor_OnCommand(editor,Ox4d,Ox4e,Ox4f);if(Ox13e==true){return true;} ;var Ox67c={};Ox67c[OxOdf51[15]]=Ox4d;Ox67c[OxOdf51[16]]=Ox4e;Ox67c[OxOdf51[17]]=Ox4f;Ox67c[OxOdf51[9]]=true;CuteEditor_FireEvent(editor,OxOdf51[18],Ox67c);if(Ox67c[OxOdf51[9]]==false){return true;} ;} ;function CuteEditor_FireEvent(editor,Ox67e,Ox67f){if(Ox67f==null){Ox67f={};} ;var Ox680=editor.getAttribute(Ox67e);if(Ox680){if( typeof (Ox680)==OxOdf51[19]){editor[OxOdf51[20]]= new Function(OxOdf51[21],Ox680);} else {editor[OxOdf51[20]]=Ox680;} ;editor._fireEventFunction(Ox67f);} ;} ;function CuteEditor_GetEditor(element){for(var Ox43=element;Ox43!=null;Ox43=Ox43[OxOdf51[22]]){if(Ox43.getAttribute(OxOdf51[23])==OxOdf51[24]){return Ox43;} ;} ;return null;} ;function CuteEditor_DropDownCommand(element,Oxa60){var editor=CuteEditor_GetEditor(element);if(editor[OxOdf51[25]]){return ;} ;if(element.getAttribute(OxOdf51[26])==OxOdf51[24]){var Ox142=element.GetValue();if(Ox142==OxOdf51[27]){Ox142=OxOdf51[4];} ;var Ox201=element.GetText();if(Ox201==OxOdf51[27]){Ox201=OxOdf51[4];} ;element.SetSelectedIndex(0);editor.ExecCommand(Oxa60,false,Ox142,Ox201);} else {if(!editor[OxOdf51[25]]&&element[OxOdf51[28]]){var Ox142=element[OxOdf51[28]];if(Ox142==OxOdf51[27]){Ox142=OxOdf51[4];} ;element[OxOdf51[29]]=0;editor.ExecCommand(Oxa60,false,Ox142,Ox201);} else {element[OxOdf51[29]]=0;} ;} ;editor.FocusDocument();} ;function CuteEditor_ExpandTreeDropDownItem(src,Ox740){var Oxba=null;while(src!=null){if(src[OxOdf51[30]]==OxOdf51[31]){Oxba=src;break ;} ;src=src[OxOdf51[22]];} ;var Ox1e4=Oxba[OxOdf51[32]].item(0);Oxba[OxOdf51[35]][OxOdf51[34]][OxOdf51[33]]=OxOdf51[4];Ox1e4[OxOdf51[36]]=OxOdf51[37]+Ox740+OxOdf51[38];Oxba[OxOdf51[39]]= new Function(OxOdf51[40]+Ox740+OxOdf51[41]);} ;function CuteEditor_CollapseTreeDropDownItem(src,Ox740){var Oxba=null;while(src!=null){if(src[OxOdf51[30]]==OxOdf51[31]){Oxba=src;break ;} ;src=src[OxOdf51[22]];} ;var Ox1e4=Oxba[OxOdf51[32]].item(0);Oxba[OxOdf51[35]][OxOdf51[34]][OxOdf51[33]]=OxOdf51[42];Ox1e4[OxOdf51[36]]=OxOdf51[37]+Ox740+OxOdf51[43];Oxba[OxOdf51[39]]= new Function(OxOdf51[44]+Ox740+OxOdf51[41]);} ;function Event_GetEvent(Ox245){Ox245=Event_FindEvent(Ox245);if(Ox245==null){Debug_Todo(OxOdf51[45]);} ;return Ox245;} ;function Element_GetAllElements(p){var arr=[];for(var i=0;i<p[OxOdf51[46]][OxOdf51[6]];i++){arr.push(p[OxOdf51[46]].item(i));} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxOdf51[47],OxOdf51[48]);element.setAttribute(OxOdf51[49],OxOdf51[50]);var arr=Element_GetAllElements(element);var len=arr[OxOdf51[6]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxOdf51[47],OxOdf51[48]);arr[i].setAttribute(OxOdf51[49],OxOdf51[50]);} ;} ;function Frame_GetContentWindow(Ox349){if(Ox349[OxOdf51[51]]){return Ox349[OxOdf51[51]];} ;if(Ox349[OxOdf51[52]]){if(Ox349[OxOdf51[52]][OxOdf51[53]]){return Ox349[OxOdf51[52]][OxOdf51[53]];} ;} ;var Ox1a8;if(Ox349[OxOdf51[54]]){Ox1a8=window[OxOdf51[55]][Ox349[OxOdf51[54]]];if(Ox1a8){return Ox1a8;} ;} ;var len=window[OxOdf51[55]][OxOdf51[6]];for(var i=0;i<len;i++){Ox1a8=window[OxOdf51[55]][i];if(Ox1a8[OxOdf51[56]]==Ox349){return Ox1a8;} ;if(Ox1a8[OxOdf51[5]]==Ox349[OxOdf51[52]]){return Ox1a8;} ;} ;Debug_Todo(OxOdf51[57]);} ;function Array_IndexOf(arr,Ox247){for(var i=0;i<arr[OxOdf51[6]];i++){if(arr[i]==Ox247){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox247){return Array_IndexOf(arr,Ox247)!=-1;} ;function clearArray(Ox24a){for(var i=0;i<Ox24a[OxOdf51[6]];i++){Ox24a[i]=null;} ;} ;function Event_FindEvent(Ox245){if(Ox245&&Ox245[OxOdf51[10]]){return Ox245;} ;if(window[OxOdf51[21]]){return window[OxOdf51[21]];} ;return Event_FindEvent_FindEventFromWindows();} ;function include(Oxc9,Ox288){var Ox289=document.getElementsByTagName(OxOdf51[58]).item(0);var Ox28a=document.getElementById(Oxc9);if(Ox28a){Ox289.removeChild(Ox28a);} ;var Ox28b=document.createElement(OxOdf51[59]);Ox28b.setAttribute(OxOdf51[60],OxOdf51[61]);Ox28b.setAttribute(OxOdf51[62],OxOdf51[63]);Ox28b.setAttribute(OxOdf51[64],Ox288);Ox28b.setAttribute(OxOdf51[54],Oxc9);Ox289.appendChild(Ox28b);} ;function Event_FindEvent_FindEventFromCallers(){var Ox18f=Event_GetEvent[OxOdf51[65]];for(var i=0;i<100;i++){if(!Ox18f){break ;} ;var Ox245=Ox18f[OxOdf51[66]][0];if(Ox245&&Ox245[OxOdf51[10]]){return Ox245;} ;Ox18f=Ox18f[OxOdf51[65]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox24e(window);function Ox24e(Ox1a8){if(Ox1a8==null){return null;} ;if(Ox1a8[OxOdf51[21]]){return Ox1a8[OxOdf51[21]];} ;if(Array_Contains(arr,Ox1a8)){return null;} ;arr.push(Ox1a8);var Ox24f=[];if(Ox1a8[OxOdf51[67]]!=Ox1a8){Ox24f.push(Ox1a8.parent);} ;if(Ox1a8[OxOdf51[68]]!=Ox1a8[OxOdf51[67]]){Ox24f.push(Ox1a8.top);} ;if(Ox1a8[OxOdf51[69]]){Ox24f.push(Ox1a8.opener);} ;for(var i=0;i<Ox1a8[OxOdf51[55]][OxOdf51[6]];i++){Ox24f.push(Ox1a8[OxOdf51[55]][i]);} ;for(var i=0;i<Ox24f[OxOdf51[6]];i++){try{var Ox245=Ox24e(Ox24f[i]);if(Ox245){return Ox245;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox245){Ox245=Event_GetEvent(Ox245);if(Ox245[OxOdf51[70]]){return Ox245[OxOdf51[70]];} ;if(Ox245[OxOdf51[71]]){return Ox245[OxOdf51[71]];} ;Debug_Todo(OxOdf51[72]);return null;} ;function Event_GetFromElement(Ox245){Ox245=Event_GetEvent(Ox245);if(Ox245[OxOdf51[73]]){return Ox245[OxOdf51[73]];} ;if(Ox245[OxOdf51[74]]){return Ox245[OxOdf51[74]];} ;return null;} ;function Event_GetToElement(Ox245){Ox245=Event_GetEvent(Ox245);if(Ox245[OxOdf51[75]]){return Ox245[OxOdf51[75]];} ;if(Ox245[OxOdf51[74]]){return Ox245[OxOdf51[74]];} ;return null;} ;function Event_GetKeyCode(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[76]];} ;function Event_GetClientX(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[77]];} ;function Event_GetClientY(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[78]];} ;function Event_GetOffsetX(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[79]];} ;function Event_GetOffsetY(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[80]];} ;function Event_IsLeftButton(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[81]]==1;} ;function Event_IsCtrlKey(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[82]];} ;function Event_IsAltKey(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[83]];} ;function Event_IsShiftKey(Ox245){Ox245=Event_GetEvent(Ox245);return Ox245[OxOdf51[84]];} ;function CuteEditor_BasicInitialize(editor){var Ox709= new Function(OxOdf51[85]);var Oxa64= new Function(OxOdf51[86]);var Oxa65= new Function(OxOdf51[87]);var Oxa66=editor.GetScriptProperty(OxOdf51[88]);var Oxa67=editor.GetScriptProperty(OxOdf51[89]);var Oxa68=Oxa66+OxOdf51[90]+Oxa67+OxOdf51[91];var Oxa69=Oxa66+OxOdf51[92];var images=editor.getElementsByTagName(OxOdf51[93]);var len=images[OxOdf51[6]];for(var i=0;i<len;i++){var img=images[i];if(img.getAttribute(OxOdf51[94])&&!img.getAttribute(OxOdf51[95])){img.setAttribute(OxOdf51[95],img.getAttribute(OxOdf51[94]));} ;var Ox135=img.getAttribute(OxOdf51[96]);var Ox671=img.getAttribute(OxOdf51[97]);if(!(Ox135||Ox671)){continue ;} ;var Oxa6a=img.getAttribute(OxOdf51[98]);if(parseInt(Oxa6a)>=0){img[OxOdf51[34]][OxOdf51[99]]=OxOdf51[100];img[OxOdf51[34]][OxOdf51[101]]=OxOdf51[100];img[OxOdf51[64]]=Oxa69;img[OxOdf51[34]][OxOdf51[102]]=OxOdf51[103]+Oxa68+OxOdf51[104];img[OxOdf51[34]][OxOdf51[105]]=OxOdf51[106]+(Oxa6a*20)+OxOdf51[107];img[OxOdf51[34]][OxOdf51[33]]=OxOdf51[4];} ;if(img[OxOdf51[108]]!=OxOdf51[109]){img[OxOdf51[108]]=OxOdf51[110];img[OxOdf51[111]]= new Function(OxOdf51[112]);img[OxOdf51[113]]= new Function(OxOdf51[114]);img[OxOdf51[115]]= new Function(OxOdf51[116]);img[OxOdf51[117]]= new Function(OxOdf51[118]);} ;if(!img[OxOdf51[119]]){img[OxOdf51[119]]=Event_CancelEvent;} ;if(!img[OxOdf51[120]]){img[OxOdf51[120]]=Event_CancelEvent;} ;if(Ox135){var Ox18f=img.getAttribute(OxOdf51[121])==OxOdf51[24]?Oxa64:Ox709;if(img[OxOdf51[39]]==null){img[OxOdf51[39]]=Ox18f;} ;if(img[OxOdf51[122]]==null){img[OxOdf51[122]]=Ox18f;} ;} else {if(Ox671){if(img[OxOdf51[39]]==null){img[OxOdf51[39]]=Oxa65;} ;} ;} ;} ;var Ox776=Window_GetElement(window,editor.GetScriptProperty(OxOdf51[123]),true);var Ox777=Window_GetElement(window,editor.GetScriptProperty(OxOdf51[124]),true);var Ox772=Window_GetElement(window,editor.GetScriptProperty(OxOdf51[125]),true);Ox772[OxOdf51[108]]+=OxOdf51[126];Ox776[OxOdf51[108]]+=OxOdf51[127];Ox777[OxOdf51[108]]+=OxOdf51[127];Element_SetUnselectable(Ox776);Element_SetUnselectable(Ox777);} ;function CuteEditor_ButtonOver(element){if(!element[OxOdf51[128]]){element[OxOdf51[119]]=Event_CancelEvent;element[OxOdf51[113]]=CuteEditor_ButtonOut;element[OxOdf51[115]]=CuteEditor_ButtonDown;element[OxOdf51[117]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxOdf51[128]]=true;} ;element[OxOdf51[129]]=true;element[OxOdf51[108]]=OxOdf51[130];} ;function CuteEditor_ButtonOut(){var element=this;element[OxOdf51[108]]=OxOdf51[110];element[OxOdf51[129]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxOdf51[108]]=OxOdf51[131];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxOdf51[129]]){element[OxOdf51[108]]=OxOdf51[130];} else {element[OxOdf51[108]]=OxOdf51[132];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxOdf51[128]]){element[OxOdf51[119]]=Event_CancelEvent;element[OxOdf51[113]]=CuteEditor_ColorPicker_ButtonOut;element[OxOdf51[115]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxOdf51[128]]=true;} ;element[OxOdf51[129]]=true;element[OxOdf51[34]][OxOdf51[133]]=OxOdf51[134];element[OxOdf51[34]][OxOdf51[135]]=OxOdf51[136];element[OxOdf51[34]][OxOdf51[137]]=OxOdf51[138];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxOdf51[129]]=false;element[OxOdf51[34]][OxOdf51[133]]=OxOdf51[139];element[OxOdf51[34]][OxOdf51[135]]=OxOdf51[4];element[OxOdf51[34]][OxOdf51[137]]=OxOdf51[138];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxOdf51[34]][OxOdf51[133]]=OxOdf51[140];element[OxOdf51[34]][OxOdf51[135]]=OxOdf51[4];element[OxOdf51[34]][OxOdf51[137]]=OxOdf51[138];} ;function CuteEditor_ButtonCommandOver(element){element[OxOdf51[129]]=true;if(element[OxOdf51[141]]){element[OxOdf51[108]]=OxOdf51[142];} else {element[OxOdf51[108]]=OxOdf51[130];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxOdf51[129]]=false;if(element[OxOdf51[143]]){element[OxOdf51[108]]=OxOdf51[144];} else {if(element[OxOdf51[141]]){element[OxOdf51[108]]=OxOdf51[142];} else {element[OxOdf51[108]]=OxOdf51[110];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxOdf51[108]]=OxOdf51[131];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxOdf51[141]]){element[OxOdf51[108]]=OxOdf51[142];return ;} ;if(element[OxOdf51[129]]){element[OxOdf51[108]]=OxOdf51[130];} else {if(element[OxOdf51[143]]){element[OxOdf51[108]]=OxOdf51[144];} else {element[OxOdf51[108]]=OxOdf51[110];} ;} ;} ;var CuteEditorGlobalFunctions=[CuteEditor_GetEditor,CuteEditor_ButtonOver,CuteEditor_ButtonOut,CuteEditor_ButtonDown,CuteEditor_ButtonUp,CuteEditor_ColorPicker_ButtonOver,CuteEditor_ColorPicker_ButtonOut,CuteEditor_ColorPicker_ButtonDown,CuteEditor_ButtonCommandOver,CuteEditor_ButtonCommandOut,CuteEditor_ButtonCommandDown,CuteEditor_ButtonCommandUp,CuteEditor_DropDownCommand,CuteEditor_ExpandTreeDropDownItem,CuteEditor_CollapseTreeDropDownItem,CuteEditor_OnInitialized,CuteEditor_OnCommand,CuteEditor_OnChange,CuteEditor_AddVerbMenuItems,CuteEditor_AddTagMenuItems,CuteEditor_AddMainMenuItems,CuteEditor_AddDropMenuItems,CuteEditor_FilterCode,CuteEditor_FilterHTML];function SetupCuteEditorGlobalFunctions(){for(var i=0;i<CuteEditorGlobalFunctions[OxOdf51[6]];i++){var Ox18f=CuteEditorGlobalFunctions[i];var name=Ox18f+OxOdf51[4];name=name.substr(8,name.indexOf(OxOdf51[145])-8).replace(/\s/g,OxOdf51[4]);if(!window[name]){window[name]=Ox18f;} ;} ;} ;SetupCuteEditorGlobalFunctions();var __danainfo=null;var danaurl=window[OxOdf51[147]][OxOdf51[146]];var danapos=danaurl.indexOf(OxOdf51[148]);if(danapos!=-1){var pluspos1=danaurl.indexOf(OxOdf51[149],danapos+10);var pluspos2=danaurl.indexOf(OxOdf51[150],danapos+10);if(pluspos1!=-1&&pluspos1<pluspos2){pluspos2=pluspos1;} ;__danainfo=danaurl.substring(danapos,pluspos2)+OxOdf51[150];} ;function CuteEditor_GetScriptProperty(name){var Ox142=this[OxOdf51[151]][name];if(Ox142&&__danainfo){if(name==OxOdf51[88]){return Ox142+__danainfo;} ;var Ox382=this[OxOdf51[151]][OxOdf51[88]];if(Ox142.substr(0,Ox382.length)==Ox382){return Ox382+__danainfo+Ox142.substring(Ox382.length);} ;} ;return Ox142;} ;function CuteEditor_SetScriptProperty(name,Ox142){if(Ox142==null){this[OxOdf51[151]][name]=null;} else {this[OxOdf51[151]][name]=String(Ox142);} ;} ;function CuteEditorInitialize(Oxa77,Oxa78){var editor=Window_GetElement(window,Oxa77,true);editor[OxOdf51[151]]=Oxa78;editor[OxOdf51[152]]=CuteEditor_GetScriptProperty;var Ox772=Window_GetElement(window,editor.GetScriptProperty(OxOdf51[125]),true);var editwin=Frame_GetContentWindow(Ox772);var editdoc=editwin[OxOdf51[5]];var Oxa79=false;var Oxa7a;var Oxa7b=false;var Oxa7c=editor.GetScriptProperty(OxOdf51[88])+OxOdf51[153]+editor.GetScriptProperty(OxOdf51[154]);var Oxb04=editor.GetScriptProperty(OxOdf51[88])+OxOdf51[155]+editor.GetScriptProperty(OxOdf51[154]);function Oxa7d(){if( typeof (window[OxOdf51[156]])==OxOdf51[157]){return ;} ;try{LoadXMLAsync(OxOdf51[158],Oxa7c+OxOdf51[159]+ new Date().getTime(),Oxa7e);} catch(x){include(OxOdf51[160],Oxa7c);var Oxb05=setInterval(function (){if(window[OxOdf51[156]]){clearInterval(Oxb05);if(Oxa79){Oxa80();} ;} ;} ,100);} ;} ;function Oxa7e(Ox290){var Ox889= new Date().getTime();if(Ox290[OxOdf51[161]]!=200){} else {Ox889=Ox290[OxOdf51[162]];} ;LoadXMLAsync(OxOdf51[163],Oxa7c+OxOdf51[164]+Ox889,Oxa7f);} ;function Oxa7f(Ox290){if(Ox290[OxOdf51[161]]!=200){alert(OxOdf51[165]);return ;} ;CuteEditorInstallScriptCode(Ox290.responseText,OxOdf51[156]);if(Oxa79){Oxa80();} ;} ;function Oxa80(){if(Oxa7b){return ;} ;for(var Ox183=editor;Ox183&&Ox183[OxOdf51[34]];Ox183=Ox183[OxOdf51[22]]){if(Ox183[OxOdf51[34]][OxOdf51[33]]==OxOdf51[42]){setTimeout(Oxa80,100);return ;} ;} ;Oxa7b=true;Ox772[OxOdf51[34]][OxOdf51[33]]=OxOdf51[166];editdoc[OxOdf51[168]][OxOdf51[167]]=true;window.CuteEditorImplementation(editor);try{editor[OxOdf51[34]][OxOdf51[169]]=OxOdf51[4];} catch(x){} ;try{editdoc[OxOdf51[168]][OxOdf51[34]][OxOdf51[169]]=OxOdf51[4];} catch(x){} ;var Oxa81=editor.GetScriptProperty(OxOdf51[170]);if(Oxa81){editor.Eval(Oxa81);} ;} ;function Oxa82(){if(!window[OxOdf51[5]][OxOdf51[168]].contains(editor)){return ;} ;try{Ox772=Window_GetElement(window,editor.GetScriptProperty(OxOdf51[125]),true);editwin=Frame_GetContentWindow(Ox772);editdoc=editwin[OxOdf51[5]];x=editdoc[OxOdf51[168]];} catch(x){setTimeout(Oxa82,100);return ;} ;if(!editdoc[OxOdf51[168]]){setTimeout(Oxa82,100);return ;} ;if(!Oxa79){Oxa79=true;setTimeout(Oxa82,100);return ;} ;if( typeof (window[OxOdf51[156]])==OxOdf51[157]){Oxa80();} else {try{editdoc[OxOdf51[168]][OxOdf51[34]][OxOdf51[169]]=OxOdf51[171];} catch(x){} ;} ;} ;CuteEditor_BasicInitialize(editor);Oxa7d();Oxa82();} ;function CuteEditorInstallScriptCode(Ox9c2,Ox9c3){eval(Ox9c2);window[Ox9c3]=eval(Ox9c3);} ;window[OxOdf51[172]]=CuteEditorInitialize;