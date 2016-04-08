<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MemosInfo.aspx.cs" Inherits="个人博客.MemosInfo1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>留言板</title>
    <link rel="stylesheet" href="Css/main.css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript">
        function GotFocus() {
            if (document.getElementById("txtsearch").value == "     search") {
                document.getElementById("txtsearch").value = "";
            }
        }
        function LostFocus() {
            if (document.getElementById("txtsearch").value == "") {
                document.getElementById("txtsearch").value = "     search";
            }
        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div style="padding: 0px; margin: 0px; background-color: #212A38; width: 100%; top: 0px;left: 0px; position: absolute; z-index: auto; clear: both;">
        <br /><br /><br />
        <p id="back-to-top"><a href="#top"><span></span>
        <asp:ImageButton ID="ImageButton3" runat="server" ImageUrl="~/image/5-120601160002-50.png" /></a></p>
            <div align="center">
                <table style="width: 250px; height: 130px" align="center">
                <tr align="center">
                    <td align="center">
                        <img src="image/timthumb.png" />
                    </td>
                </tr>
            </table>
                </div>
        
        <div class="nav" style="background-color: #212A38; text-align: center;">            
        <ul class="nav-main hidden-box>ul">
            <li id="li-1">
                <a><asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/index.aspx" ForeColor="White">首页</asp:HyperLink></a><span id="span-1"></span></li>
            <li id="li-2">
                <asp:HyperLink ID="HyperLink3" runat="server" ForeColor="White">小喵</asp:HyperLink><span id="span-2"></span></li>
            <li id="li-3">
                <asp:HyperLink ID="HyperLink4" runat="server" ForeColor="White">原创小说</asp:HyperLink><span id="span-3"></span></li>
            <li id="li-4">
                <asp:HyperLink ID="HyperLink5" runat="server" ForeColor="White">友情链接</asp:HyperLink><span id="span-4"></span></li>
            <li id="li-5">
                <asp:HyperLink ID="HyperLink6" runat="server" ForeColor="White">留言板</asp:HyperLink><span id="span-5"></span></li>
            <li id="li-6">
                <asp:HyperLink ID="HyperLink7" runat="server">归档</asp:HyperLink></li>
        </ul>
    <div id="box-1" class="hidden-box">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink8" runat="server">生活</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink9" runat="server">代码</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink10" runat="server">美好</asp:HyperLink></li>            
        </ul>
        </div>
        <div id="box-2" class="hidden-box box02">
        <ul>
            <li>love</li>            
        </ul>
            </div>
            <div id="box-3" class="hidden-box box03">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink11" runat="server">你所在乎的我</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink12" runat="server">想你</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink13" runat="server">花信年华</asp:HyperLink></li>            
        </ul>
                </div>
                <div id="box-4" class="hidden-box box04">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink14" runat="server">余音</asp:HyperLink></li>
            <li></li>
            <li></li>            
        </ul>
        </div>
        <div id="box-5" class="hidden-box box05">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink15" runat="server">微博</asp:HyperLink></li>            
        </ul>
    </div>
    </div><br />
            <div class="txt" align="center">
              <asp:TextBox ID="txtsearch" runat="server" BackColor="#212A38" BorderColor="#212A38" BorderStyle="Solid" Height="22px" Width="107px" ForeColor="White" Text="     search" onfocus="GotFocus()" onblur="LostFocus()" BorderWidth="0px"></asp:TextBox></td>
                <br /><br />
        </div>
        <div align="center" >            
            <table style="width: 800px; text-align: center; background-color: #CCCCCC;" align="center">
                <tr><td align="left" style="color: #000000">
                            <h1>留言板</h1><br /><br />
                     </td>
                </tr>  
                <tr><td align="center" style="color: #FFFFFF">
                            <p style="text-align: left; color: #000000;">Hi</p><br />
                            <p style="text-align: left; color: #000000;">我是老喵</p><br />
                            <p style="text-align: left; color: #000000;">跟我说两句吧</p><br /><br /><br />
                            <hr style="font-size: 1px" />
                     </td>
                </tr>    
                <tr><td align="left">
                    <asp:DataList ID="DataList1" runat="server">
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"name") %>' ForeColor="#FF9966" Height="30"></asp:Label>
                            <br /><br />
                            <asp:Label ID="Label2" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"desn") %>' ForeColor="Black" Height="20"></asp:Label>
                            <br />
                            <br />
                        </ItemTemplate>
                    </asp:DataList>
                    </td></tr>    
                <tr><td align="left" style="color: #FFFFFF">
                            <p><span>LEAVE A REPLY</span></p><br />
                            <p><label style="color: #000000">名字：</label>&nbsp;
                                <asp:TextBox ID="txtname" runat="server"></asp:TextBox>
                            </p><br />
                            <p><label style="color: #000000">邮箱：</label>&nbsp;
                                <asp:TextBox ID="txtmail" runat="server"></asp:TextBox>
                            </p><br />
                            <p><label style="color: #000000">网站：</label>&nbsp;
                                <asp:TextBox ID="txtweb" runat="server"></asp:TextBox>
                            </p><br />
                            <p>
                                <asp:TextBox ID="txtdesn" runat="server" Height="171px" TextMode="MultiLine" Width="838px"></asp:TextBox></p>                            
                    </td>
                </tr>    
                <tr><td>
                    <asp:ImageButton ID="ImageButton1" runat="server" ImageUrl="~/image/发布.PNG" OnClick="ImageButton1_Click" /></td>
                    </tr>    
                </table>
        </div>  <br /> <br /><br />
            <div align="center" class="foot" style="color: #FFFFFF;">
                copyright © 2016   theme by 西瓜
            </div>             
    </div>
    </form>
</body>
</html>
