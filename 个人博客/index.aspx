<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="个人博客.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>首页</title>
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
                <asp:HyperLink ID="HyperLink6" runat="server" ForeColor="White" NavigateUrl="~/MemosInfo.aspx">留言板</asp:HyperLink><span id="span-5"></span></li>
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
        <div style="clip: rect(auto, auto, auto, auto);" align="center">            
            <table style="width: 850px; height: 500px; text-align: center;">
                    <tr>
                        <td align="left">
                            <asp:DataList ID="DataList1" runat="server" DataKeyField="Id" RepeatColumns="3" BackColor="#DEBA84" BorderColor="#DEBA84" BorderStyle="None" BorderWidth="1px" CellPadding="3" CellSpacing="2" GridLines="Both" OnItemCommand="DataList1_ItemCommand" RepeatDirection="Horizontal">
                                <FooterStyle BackColor="#F7DFB5" ForeColor="#8C4510" />
                                <HeaderStyle BackColor="#A55129" Font-Bold="True" ForeColor="White" />
                                <ItemStyle BackColor="#FFF7E7" ForeColor="#8C4510" />
                                <ItemTemplate>
                                    <a><asp:HyperLink ID="HyperLink1" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"Title") %>' NavigateUrl='<%# "ArticleInfo.aspx?id="+DataBinder.Eval(Container.DataItem,"Id") %>'></asp:HyperLink></a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="Label1" runat="server" Text='<%# DataBinder.Eval(Container.DataItem,"Time") %>'></asp:Label>
                                    <br />
                                    <br />
                                    <asp:ImageButton ID="ImageButton1" runat="server" Height="164px" ImageUrl='<%# "image"+DataBinder.Eval(Container.DataItem,"picture") %>' Width="286px" CommandName="select" OnCommand="ImageButton1_Command" />
                                    <br />
                                    <br />
                                    <asp:Literal ID="Literal1" runat="server" Text='<%# (DataBinder.Eval(Container.DataItem,"Detail").ToString().Length)>40?(DataBinder.Eval(Container.DataItem,"Detail")).ToString().Substring(0,40)+"...":DataBinder.Eval(Container.DataItem,"Detail") %>'></asp:Literal>
                                </ItemTemplate>
                                <SelectedItemStyle BackColor="#738A9C" Font-Bold="True" ForeColor="White" />
                            </asp:DataList>
                        </td>
                    </tr>
                </table>
        </div>  <br /> <br /><br />
            <div align="center" class="foot" style="color: #FFFFFF;">
                copyright © 2016   theme by <a>
                    <asp:HyperLink ID="HyperLink16" runat="server" NavigateUrl="~/login.aspx" ForeColor="White">西瓜</asp:HyperLink></a>
            </div>             
    </div>
    </form>
</body>
</html>
