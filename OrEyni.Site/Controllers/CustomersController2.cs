﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrEyni.Bl;
using System.Collections;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using OrEyni.Entities;

namespace OrEyni.Site.Controllers
{
    [RoutePrefix("api/customers")]
    public class CustomersController2 : BaseController
    {

        public CustomersBl _customersBl;
        public CustomersController2()
        {
            _customersBl = new CustomersBl();
        }
        //    [HttpGet]
        //    public HttpResponseMessage Get()
        //    {

        //        return base.RunCodeSafly<IList<Customer>>("GetCustomers", () =>
        //        {
        //            //return _customersBl.getCustomers();
        //            return new List<Customer>()
        //             {
        //                 new Customer(){CustomerId=123,FullName="אהרון הכהן"},
        //                 new Customer(){CustomerId=124,FullName="משה רבינו"},
        //                 new Customer(){CustomerId=125,FullName="דוד המלך"}
        //             };
        //        });
        //    }

        //    [Route("GetCustomerDetails/{id}")]
        //    public HttpResponseMessage GetCustomerDetails(int id)
        //    {
        //        return base.RunCodeSafly<CustomerDetials>("GetCustomerDetails", () =>
        //        {
        //            return id == 123 ? new CustomerDetials() { CustomerId = 123, FirstName = "אהרון", LastName = "הכהן" }
        //            : id == 124 ? new CustomerDetials() { CustomerId = 124, FirstName = "משה", LastName = "רבינו" }
        //            : new CustomerDetials() { CustomerId = 125, FirstName = "דוד", LastName = "המלך" };
        //        });
        //    }
        //}

        //public class Customer
        //{
        //    public int CustomerId { get; set; }
        //    public string FullName { get; set; }
        //}

        //public class CustomerDetials
        //{
        //    public int CustomerId { get; set; }
        //    public string FirstName { get; set; }

        //    public string LastName { get; set; }


        //}
    }
}