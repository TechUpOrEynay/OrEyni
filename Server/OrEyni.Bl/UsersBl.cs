using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrEyni.Dal;
using OrEyni.Entities;

namespace OrEyni.Bl 
{
    public class UsersBl
    {
       UsersDal _usersDal;

        public UsersBl()
        {
            _usersDal = new UsersDal();
        }
        public Boolean Login(string userName ,string password)
        { return _usersDal.Login(userName, password); }
    }
}

