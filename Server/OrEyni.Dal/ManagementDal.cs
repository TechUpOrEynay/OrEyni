using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrEyni.Entities;

namespace OrEyni.Dal
{
    public class ManagementDal
    {

        public List<City> GetCities()
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Cities.ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public Boolean AddSchool(School school)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (school != null)
                {
                    school.Id = context.Schools.Max(x => x.Id) + 1;

                    context.Schools.Add(school);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean AddProblem(Problem problem)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (problem != null)
                {
                    problem.Id = context.Problems.Max(x => x.Id) + 1;

                    context.Problems.Add(problem);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean AddUser(User user)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (user != null)
                {
                    user.Id = context.Users.Max(x => x.Id) + 1;

                    context.Users.Add(user);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}