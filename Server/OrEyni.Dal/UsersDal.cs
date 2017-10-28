using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrEyni.Entities;

namespace OrEyni.Dal
{
    public class UsersDal
    {
        public Boolean Login(string userName , string password)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Users.FirstOrDefault(x => x.UserName == userName && x.Password == password);           
                if (fromDB != null)
                    return true;
                return false;
            }
        }
    }
}