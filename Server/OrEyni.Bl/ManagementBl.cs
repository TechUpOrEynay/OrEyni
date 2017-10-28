using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrEyni.Dal;
using OrEyni.Entities;
using OrEyni.Entities.Model;
namespace OrEyni.Bl 
{
    public class ManagementBl
    {
        ManagementDal _managementDal;

        public ManagementBl()
        {
           _managementDal = new ManagementDal();
        }
        public List<City> GetCities()
        {
            return _managementDal.GetCities();
        }
        public Boolean AddSchool(School school)
        {
            return _managementDal.AddSchool(school);
        }
        public Boolean AddProblem(Problem problem)
        {
            return _managementDal.AddProblem(problem);
        }
        public Boolean AddUser(User user)
        {
            return _managementDal.AddUser(user);
        }

    }
}

