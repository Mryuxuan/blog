using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;
using Modal;
using System.Data;

namespace BLL
{
    public class ArticleBLL
    {
        ArticleDAL dal = new ArticleDAL();
        public DataSet getArticle(string sql)
        {
            return dal.getArticle(sql);

        }
        public Article getById(int articleId)
        {
            return dal.getById(articleId);
        }
        public void addArticle(Article a)

        {
            dal.addArticle(a);
        }
    }
}