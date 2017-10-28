using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrEyni.Bl;
using System.Collections;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using OrEyni.Entities;
namespace OrEyni.Site.Controllers
{
    [RoutePrefix("api/users")]
    public class UsersController: ApiController
    {
        UsersBl _usersBl;
        public UsersController()
        {
            _usersBl = new UsersBl();
        }
        //[HttpGet]
        //public HttpResponseMessage Get()
        //{
        //    using (OrEnayEntities context = new OrEnayEntities())
        //    {
        //        var fromDB = context.Users.First();

        //    }
        //    return null;
        //}
        [HttpGet]
        [Route("login")]
        public Boolean Login(string userName , string password)
        {
            return _usersBl.Login(userName, password);
        }
    }
}
