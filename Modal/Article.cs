using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Modal
{
    public class Article
    {
        int articleId;

        public int ArticleId
        {
            get { return articleId; }
            set { articleId = value; }
        }
           

        
        string title;

        public string Title
        {
            get { return title; }
            set { title = value; }
        }
        string detail;

        public string Detail
        {
            get { return detail; }
            set { detail = value; }
        }
        string picture;

        public string Picture
        {
            get { return picture; }
            set { picture = value; }
        }
        DateTime time;

        public DateTime Time
        {
            get { return time; }
            set { time = value; }
        }
    }
}