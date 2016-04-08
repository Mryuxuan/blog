using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BLL;
using DAL;
using Modal;
using System.Data;

namespace 个人博客
{
    public partial class MemosInfo1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack == false)
            {
                MemosBAL bll = new MemosBAL();
                string sql = "select top 3 * from memos order by memosid desc";
                DataSet ds = bll.getMemos(sql);
                DataList1.DataSource = ds.Tables[0];
                DataList1.DataBind();
            }
        }

        protected void ImageButton1_Click(object sender, ImageClickEventArgs e)
        {
            Memos m = new Memos();
            m.Name = txtname.Text.Trim();
            m.Desn = txtdesn.Text.Trim();
            MemosBAL bll = new MemosBAL();
            try
            {
                bll.addmemos(m);
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('发表成功!')", true);
                txtname.Text = "";
                txtdesn.Text = "";

            }
            catch (Exception ee)
            {
                Page.ClientScript.RegisterStartupScript(GetType(), "", "alert('发表失败!')", true);
            }
        }
    }
}