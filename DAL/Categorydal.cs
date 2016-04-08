using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;

namespace DAL
{
    public class Categorydal
    {
        database db = new database();
        //定义方法，根据商品类别中的子类别
        public DataSet getCategoryByParentId(int parentid)
        {
            string sql = "select * from Category where ParentID=" + parentid;
            DataSet ds = db.GetDataSet(sql);
            return ds;

        }

    }
}