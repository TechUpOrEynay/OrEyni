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
    [RoutePrefix("api/Donors")]
    public class DonorsController : ApiController
    {
        public DonorsBl _donorsBl;
        public DonorsController()
        {
            _donorsBl = new DonorsBl();
        }

        [Route("GetDonors")]
        public IList<Donor> GetDonors()
        {

            var fromDB = _donorsBl.GetDonors();
            return fromDB;

        }
        [HttpPost]
        [Route("updateDonorDetailes")]
        public Boolean updateDonorDetailes(Donor donor)
        {
            var fromDB = _donorsBl.updateDonorDetailes(donor);
            return fromDB;
        }
        [HttpPost]
        [Route("createNewDonor")]
        public int createNewDonor(Donor donor)
        {
            var fromDB = _donorsBl.createNewDonor(donor);
            return fromDB;
        }
        [HttpGet]
        [Route("deleteDonor/{id}")]
        public Boolean deleteDonor(int id)
        {
            var fromDB = _donorsBl.deleteDonor(id);
            return fromDB;
        }
        [HttpGet]
        [Route("GetDonation/{id}")]
        public IList<Donation> GetDonation(int id)
        {
            var fromDB = _donorsBl.GetDonation(id);
            return fromDB;
        }
        [HttpGet]
        [Route("getDonorContact/{id}")]
        public List<DonorContact> getDonorContact(int id)
        {
            var fromDB = _donorsBl.getDonorContact(id);
            return fromDB;
        }
        [HttpPost]
        [Route("addDonation")]
        public Boolean addDonation(Donation donation)
        {
            var fromDB = _donorsBl.addDonation(donation);
            return fromDB;
        }
        [HttpPost]
        [Route("addDonorContact")]
        public Boolean addDonorContact(DonorContact donorContact)
        {
            var fromDB = _donorsBl.addDonorContact(donorContact);
            return fromDB;
        }
        [HttpPost]
        [Route("updateDonationsThanks")]
        public Boolean updateDonationsThanks(int[] listIndex)
        {
            var fromDB = _donorsBl.updateDonationsThanks(listIndex);
            return fromDB;
        }
        
    }
}

