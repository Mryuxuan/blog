﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.OleDb;

namespace DAL
{
    public class database
    {
        private string Constr = "Provider=SQLOLEDB;Data Source=.;Initial Catalog=wmblog;User ID=sa;Password=";
        private OleDbConnection conn;
        public database()
        {
            conn = new OleDbConnection(Constr);
            conn.Open();
        }
        public OleDbDataReader GetDataReader(string sql)
        {
            OleDbCommand cmd = new OleDbCommand();
            cmd.Connection = conn;
            cmd.CommandText = sql;
            OleDbDataReader dr = cmd.ExecuteReader();
            return dr;
        }
        public int ExecSql(string sql)
        {
            OleDbCommand cmd = new OleDbCommand(sql, conn);
            int i = 0;
            i = cmd.ExecuteNonQuery();//受影响的行数
            return i;

        }
        //执行SQL命令，返回数据集
        public DataSet GetDataSet(string sql)
        {
            OleDbDataAdapter da = new OleDbDataAdapter(sql, conn);
            DataSet ds = new DataSet();
            da.Fill(ds);
            return ds;

        }
        //定义一个函数，用数据集来更新物理数据库
        public void UpdateDataset(string sql, DataSet ds)
        {
            OleDbDataAdapter da = new OleDbDataAdapter(sql, conn);
            OleDbCommandBuilder CmdBuilder = new OleDbCommandBuilder(da);//用来自动产生sql语句
            da.UpdateCommand = CmdBuilder.GetUpdateCommand();
            da.InsertCommand = CmdBuilder.GetInsertCommand();
            da.DeleteCommand = CmdBuilder.GetDeleteCommand();
            da.Update(ds);

        }
        public void close()
        {
            conn.Close();

        }

    }
}
