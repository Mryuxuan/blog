var OxO48de=["outer","btnbrowse","inp_src","onclick","value","cssText","style","src","FileName"];var outer=Window_GetElement(window,OxO48de[0],true);var btnbrowse=Window_GetElement(window,OxO48de[1],true);var inp_src=Window_GetElement(window,OxO48de[2],true);btnbrowse[OxO48de[3]]=function btnbrowse_onclick(){function Ox35d(Ox13e){if(Ox13e){inp_src[OxO48de[4]]=Ox13e;} ;} ;editor.SetNextDialogWindow(window);editor.ShowSelectFileDialog(Ox35d,inp_src.value);} ;UpdateState=function UpdateState_Media(){outer[OxO48de[6]][OxO48de[5]]=element[OxO48de[6]][OxO48de[5]];outer.mergeAttributes(element);if(element[OxO48de[7]]){outer[OxO48de[8]]=element[OxO48de[8]];} else {outer.removeAttribute(OxO48de[8]);} ;} ;SyncToView=function SyncToView_Media(){inp_src[OxO48de[4]]=element[OxO48de[8]];} ;SyncTo=function SyncTo_Media(element){element[OxO48de[8]]=inp_src[OxO48de[4]];} ;