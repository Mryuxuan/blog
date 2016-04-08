using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BLL;
using System.Data;

namespace 个人博客
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack == false)
            {
                ArticleBLL bll = new ArticleBLL();
                string sql = "select top 9 * from Blog order by Time desc";
                DataSet ds = bll.getArticle(sql);
                DataList1.DataSource = ds.Tables[0];
                DataList1.DataBind();
            }
        }

        protected void ImageButton1_Command(object sender, CommandEventArgs e)
        {

        }

        protected void DataList1_ItemCommand(object source, DataListCommandEventArgs e)
        {
            if (e.CommandName == "select")
            Response.Redirect("ArticleInfo.aspx?id=" + DataList1.DataKeys[e.Item.ItemIndex].ToString());
        }

        protected void ImageButton2_Click(object sender, ImageClickEventArgs e)
        {

        }
    }
}