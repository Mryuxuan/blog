using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;
using Modal;
using System.Data;

namespace BLL
{
    public class MemosBAL
    {
        MemosDAL dal = new MemosDAL();
        public DataSet getMemos(string sql)
        {
            return dal.getMemos(sql);

        }
        public Memos getById(int memosId)
        {
            return dal.getById(memosId);
        }
        public void addmemos(Memos m)
        {
            dal.addMemos(m);
        }
    }
}