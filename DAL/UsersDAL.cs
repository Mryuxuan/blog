using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.OleDb;

namespace DAL
{
    
    public class UsersDAL
    {
        database db;
        public UsersDAL()
    {
        db = new database();
    }
        public Users getUserByName(string name)
        {
            Users u = new Users();
            string sql = "select * from [user] where name='"+name+"'";
            OleDbDataReader dr = db.GetDataReader(sql);
            if (dr.Read())
            {
                u.Name = dr["name"].ToString();
                u.Pwd = dr["pwd"].ToString();             

            }
            else
            {
                u = null;
            }
            return u;
            
        }
        public Boolean UserNameIsExist(string name)
        {
            string sql = "select * from [user] where name='" + name + "'";
            DataSet ds = db.GetDataSet(sql);
            if (ds.Tables[0].Rows.Count > 0)
                return true;
            else
                return false;
        }
    }
}