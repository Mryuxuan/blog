using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Modal;
using BLL;
using DAL;

namespace 个人博客
{
    public partial class AddArticle : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string username;
            Users u;
            UsersBLL bll = new UsersBLL();
            if (txtusername.Text.Trim() == "")
            {
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('用户名不能为空！')", true);
                return;

            }
            if (txtpwd.Text.Trim() == "")
            {
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('密码不能为空！')", true);
                return;
            }
            username = txtusername.Text.Trim();
            u = bll.getUserByName(username);
            if (u != null && u.Pwd == txtpwd.Text.Trim())
            {
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('登录成功！')", true);
                Session["users"] = u;
                Response.Redirect("AddArticle.aspx");
            }
            else
            {
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('用户名或密码错误！')", true);
            }
        }
    }
}