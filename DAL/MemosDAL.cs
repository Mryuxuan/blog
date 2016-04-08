using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using Modal;

namespace DAL
{
    public class MemosDAL
    {
        database db = new database();
        public DataSet getMemos(string sql)
        {
            DataSet ds;
            ds = db.GetDataSet(sql);
            return ds;
        }
        public Memos DatasetToMemos(DataSet ds)
        {
            Memos m = new Memos();
            m.Memosid = int.Parse(ds.Tables[0].Rows[0]["memosid"].ToString());
            m.Name = ds.Tables[0].Rows[0]["name"].ToString();
            m.Desn = ds.Tables[0].Rows[0]["desn"].ToString();
            return m;
        }
        public Memos getById(int Id)
        {
            string sql = "select top 3 from memos";
            DataSet ds = db.GetDataSet(sql);
            Memos m = DatasetToMemos(ds);
            return m;
        }
        public void addMemos(Memos m)
        {
            string sql = "select top 3 * from memos";
            DataSet ds = db.GetDataSet(sql);
            DataRow dr = ds.Tables[0].NewRow();
            dr["name"] = m.Name;
            dr["desn"] = m.Desn;
            ds.Tables[0].Rows.Add(dr);
            db.UpdateDataset(sql, ds);

        }
    }
}