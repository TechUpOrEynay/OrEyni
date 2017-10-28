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
    public class CustomersBl
    {
        CustomersDal _customersDal;

        public CustomersBl()
        {
            _customersDal = new CustomersDal();
        }
        public List<Child> getCustomers()
        {
            return _customersDal.GetCustomers();
        }
        public Child getCustomerById(int id)
        {
            return _customersDal.getCustomerById(id);
        }
        public Child GetCustomerDetails(int id)
        {
            return _customersDal.GetCustomerDetails(id);
        }
        public IList< Process> getCustomerProcess(int id)
        {
            return _customersDal.getCustomerProcess(id);
        }
        public IList<ProcessType> getProcessTypeTable()
        {
            return _customersDal.getProcessTypeTable();
        }
        public IList<Parent> getParentsNameByFamilyId(int id)
        {
            return _customersDal.getParentsNameByFamilyId(id);
        }
        public int addProcess(Process process)
        {
            return _customersDal.addProcess(process);
        }

    }
}

