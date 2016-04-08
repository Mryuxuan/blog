using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DAL
{
    public class Users
    {
        string id;

        public string Id
        {
            get { return id; }
            set { id = value; }
        }
        string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        string pwd;

        public string Pwd
        {
            get { return pwd; }
            set { pwd = value; }
        }

    }
}