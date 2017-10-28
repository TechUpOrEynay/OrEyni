using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using OrEyni.Bl;
using System.Collections;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using OrEyni.Entities;

namespace OrEnay.Site.Controllers
{
    [RoutePrefix("api/Management")]
    public class ManagementController:ApiController
    {

        public ManagementBl _managementBl;


        public ManagementController()
        {
            _managementBl = new ManagementBl();
        }

        [Route("GetCities")]
        public IList<City> GetCities()
        {
            var fromDB = _managementBl.GetCities();
            return fromDB;
        }
        [HttpPost]
        [Route("AddSchool")]
        public Boolean AddSchool(School school)
        {
            return _managementBl.AddSchool(school);
        }
        [HttpPost]
        [Route("AddProblem")]
        public Boolean AddProblem(Problem problem)
        {
            return _managementBl.AddProblem(problem);
        }
        [HttpPost]
        [Route("AddUser")]
        public Boolean AddUser(User user)
        {
            return _managementBl.AddUser(user);
        }
    }
}






    