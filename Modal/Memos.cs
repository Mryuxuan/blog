using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Modal
{
    public class Memos
    {
        int memosid;

        public int Memosid
        {
            get { return memosid; }
            set { memosid = value; }
        }
        string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        string desn;

        public string Desn
        {
            get { return desn; }
            set { desn = value; }
        }
    }
}