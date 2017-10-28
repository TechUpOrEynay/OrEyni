using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrEyni.Entities;

namespace OrEyni.Dal
{
    public class CustomersDal
    {

        public List<Child> GetCustomers()
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Children.ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public Child getCustomerById(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Children.FirstOrDefault(x => x.ID == id);
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        
        public Child GetCustomerDetails(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Children.FirstOrDefault(x => x.ID == id);
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public IList< Process >getCustomerProcess(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Processes.Where(x => x.ChildID == id).ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public IList<ProcessType> getProcessTypeTable()
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.ProcessTypes.ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public IList<Parent> getParentsNameByFamilyId(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Parents.Where(x => x.FamilyID == id).ToList();                   
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public int addProcess(Process process)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {

                if (process != null)
                {
                    process.ID = context.Processes.Max(x => x.ID) + 1;
                    //var fromDB = context.Processes.Where(y => y.ChildID == process.ChildID);
                    context.Processes.Add(process);
                    context.SaveChanges();
                    return process.ID;
                }
                return 0;
            }
        }
        
    }
}