<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ArticleInfo.aspx.cs" Inherits="个人博客.ArticleInfo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>无题</title>
        <link rel="stylesheet" href="Css/main.css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div style="padding: 0px; margin: 0px; background-color: #212A38; width: 100%; top: 0px;left: 0px; position: absolute;">
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
            <li id="li-1"><a><asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/index.aspx" ForeColor="White">首页</asp:HyperLink></a><span id="span-1"></span></li>
            <li id="li-2">
                <asp:HyperLink ID="HyperLink1" runat="server" ForeColor="White">小喵</asp:HyperLink><span id="span-2"></span></li>
            <li id="li-3">
                <asp:HyperLink ID="HyperLink3" runat="server" ForeColor="White">原创小说</asp:HyperLink><span id="span-3"></span></li>
            <li id="li-4">
                <asp:HyperLink ID="HyperLink4" runat="server" ForeColor="White">友情链接</asp:HyperLink><span id="span-4"></span></li>
            <li id="li-5">
                <asp:HyperLink ID="HyperLink5" runat="server" ForeColor="White" NavigateUrl="~/MemosInfo.aspx">留言板</asp:HyperLink><span id="span-5"></span></li>
            <li id="li-6">
                <asp:HyperLink ID="HyperLink6" runat="server" ForeColor="White">归档</asp:HyperLink></li>
        </ul>
    <div id="box-1" class="hidden-box">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink7" runat="server" NavigateUrl="~/index.aspx" ForeColor="White">生活</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink8" runat="server" ForeColor="White">代码</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink9" runat="server" ForeColor="White">美好</asp:HyperLink></li>            
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
                <asp:HyperLink ID="HyperLink10" runat="server" ForeColor="White">你所在乎的我</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink11" runat="server" ForeColor="White">想你</asp:HyperLink></li>
            <li>
                <asp:HyperLink ID="HyperLink12" runat="server" ForeColor="White">花信年华</asp:HyperLink></li>            
        </ul>
                </div>
                <div id="box-4" class="hidden-box box04">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink13" runat="server" ForeColor="White">余音</asp:HyperLink></li>
            <li></li>
            <li></li>            
        </ul>
        </div>
        <div id="box-5" class="hidden-box box05">
        <ul>
            <li>
                <asp:HyperLink ID="HyperLink14" runat="server" ForeColor="White">微博</asp:HyperLink></li>            
        </ul>
    </div>
    </div><br />
        <div align="center">            
            <table style="width: 800px;">
                <tr align="left" style="font-size: xx-large; background-color: #FFFFCC;">
                    <td>                        
                        <a><asp:Label ID="Label1" runat="server" Text="Label"></asp:Label></a>
                        <br />
                    </td>
                </tr>
                <tr align="center">
                    <td>
                        <asp:Image ID="Image1" runat="server" Height="416px" Width="810px" />
                    </td>
                </tr>  
                <tr width="800px" style="background-color: #FFFFCC">
                    <td align="left">
                        <asp:Literal ID="Literal1" runat="server"></asp:Literal>
                    </td>
                </tr>              
            </table>
        </div><br /><br /><br />
        <div align="center" class="foot" style="color: #FFFFFF;">
                copyright © 2016   theme by 西瓜
            </div> 
        </div>
    </form>
</body>
</html>
