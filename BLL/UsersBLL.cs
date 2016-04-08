using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DAL;

namespace BLL
{
    public class UsersBLL
    {
        UsersDAL dal = new UsersDAL();
        public Users getUserByName(string name)
        {
            return dal.getUserByName(name);
        }
        public Boolean UserNameIsExist(string name)
        {
            return dal.UserNameIsExist(name);
        }
        
    }
}