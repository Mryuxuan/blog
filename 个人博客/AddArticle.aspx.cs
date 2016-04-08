using BLL;
using DAL;
using Modal;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace 个人博客
{
    public partial class AddProduct : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            string file = "";
            Users u = (Users)Session["users"];
            //try
            //{
                if (FileUpload1.HasFile)
                {
                    file = Server.MapPath("/image/" + u.Id);
                    if (File.Exists(file + "/" + FileUpload1.FileName))
                    {
                        Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('文件已经存在!')", true);
                        FileUpload1.Focus();
                        return;
                    }
                    FileUpload1.SaveAs(file + "/" + FileUpload1.FileName);
                }
                else
                {
                    Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('请选择选择要上传的文件!')", true);
                    FileUpload1.Focus();
                    return;
                }
            //}
            //catch (Exception ee)
            //{
            //    Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('文件上传失败！')", true);

            //}
            Article a = new Article();
            a.Title = txtname.Text.Trim();
            a.Detail = Editor1.Text;
            a.Picture = "/" + u.Id + "/" + FileUpload1.FileName;
            ArticleBLL bll = new ArticleBLL();
            try
            {
                bll.addArticle(a);
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('保存成功！')", true);
            }
            catch 
            {
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('保存失败！')", true);
            }
        }
    }
}