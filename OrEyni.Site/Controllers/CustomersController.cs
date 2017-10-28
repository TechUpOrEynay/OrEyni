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
    [RoutePrefix("api/customers")]
    public class CustomersController : ApiController
    {
        public CustomersBl _customersBl;


        public CustomersController()
        {
            _customersBl = new CustomersBl();
        }

        [Route("getcustomers")]
        public IList<Child> getcustomers()
        {

            var fromDB = _customersBl.getCustomers();
            return fromDB;

        }
        [HttpGet]
        [Route("getCustomerById/{id}")]
        public Child getCustomerById(int id)
        {
            return _customersBl.getCustomerById(id);
        }
        
        [HttpGet]
        [Route("getCustomerProcess/{id}")]
        public IList<Process> getCustomerProcess(int id)
        {
            return _customersBl.getCustomerProcess(id);
        }
        [HttpGet]
        [Route("getProcessTypeTable")]
        public IList<ProcessType> getProcessTypeTable()
        {
            return _customersBl.getProcessTypeTable();
        }

        [HttpGet]
        [Route("getParentsNameByFamilyId/{id}")]
        public IList<Parent> getParentsNameByFamilyId(int id)
        {
            return _customersBl.getParentsNameByFamilyId(id);
        }
        [HttpPost]
        [Route("addProcess")]
        public int addProcess(Process process)
        {
            return _customersBl.addProcess(process);
        }


    }
}


//[Route("getcustomerdetails/{id}")]
//public CustomerDetials getcustomerdetails(int id)
//{
//    return id == 123 ? new CustomerDetials() { Id = 123, FirstName = "אהרון"/*, LastName = "הכהן"*/ }
//    : id == 124 ? new CustomerDetials() { Id = 124, FirstName = "משה"/*, LastName = "רבינו" */}
//    : new CustomerDetials() { Id = 125, FirstName = "דוד"/*, LastName = "המלך"*/ };
//}
//[HttpGet]
//public HttpResponseMessage Get()
//{

//  
//return new List<Customer>()
//         {
//        new Customer() { Id = 123,FirstName = "אהרון הכהן"},
//        new Customer() { Id = 124,FirstName = "משה רבינו"},
//        new Customer() { Id = 125,FirstName = "דוד המלך"}
//         };
//}