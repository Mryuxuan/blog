using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BLL;
using Modal;
using System.Data;

namespace 个人博客
{
    public partial class ArticleInfo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request["id"] != null)
            {
                ArticleBLL bll = new ArticleBLL();
                int articleId = int.Parse(Request["id"].ToString());
                Article a = bll.getById(articleId);
                Label1.Text = a.Title;
                Image1.ImageUrl = "image" + a.Picture;
                Literal1.Text = a.Detail;
            }
        }
    }
}