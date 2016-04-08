using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Modal;
using System.Data;
using System.Data.OleDb;

namespace DAL
{
    public class ArticleDAL
    {
        database db = new database();
        public DataSet getArticle(string sql)
        {
            DataSet ds;
            ds = db.GetDataSet(sql);
            return ds;
        }
        public Article DatasetToArticle(DataSet ds)
        {
            Article a = new Article();
            a.ArticleId = int.Parse(ds.Tables[0].Rows[0]["Id"].ToString());
            a.Title = ds.Tables[0].Rows[0]["Title"].ToString();
            a.Detail = ds.Tables[0].Rows[0]["Detail"].ToString();
            a.Picture = ds.Tables[0].Rows[0]["Picture"].ToString();
            a.Time = DateTime.Parse(ds.Tables[0].Rows[0]["Time"].ToString());
            return a;
        }
        public Article getById(int Id)
        {
            string sql = "select * from Blog where Id=" + Id;
            DataSet ds = db.GetDataSet(sql);
            Article a = DatasetToArticle(ds);
            return a;
        }
        public void addArticle(Article a)

        {
          string sql = "select top 1  * from Blog";
          DataSet ds = db.GetDataSet(sql);
          DataRow dr = ds.Tables[0].NewRow();
          dr["title"] = a.Title;
          dr["detail"] = a.Detail;
          dr["picture"] = a.Picture;
          dr["time"] = DateTime.Now;
          ds.Tables[0].Rows.Add(dr);
          db.UpdateDataset(sql, ds);
          
         }
    }

    
}