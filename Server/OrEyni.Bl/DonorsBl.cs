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
    public class DonorsBl
    {
        DonorsDal _donorsDal;

        public DonorsBl()
        {
            _donorsDal = new DonorsDal();
        }
        public List<Donor> GetDonors()
        {
            return _donorsDal.GetDonors();
        }
        public Boolean updateDonorDetailes(Donor donor)
        {
            return _donorsDal.updateDonorDetailes(donor);
        }
        public int createNewDonor(Donor donor)
        {
            return _donorsDal.createNewDonor(donor);
        }
        
        public Boolean deleteDonor(int id)
        {
            return _donorsDal.deleteDonor(id);
        }
        public List<Donation> GetDonation(int id)
        {
            return _donorsDal.GetDonation(id);
        }
        public List<DonorContact> getDonorContact(int id)
        {
            return _donorsDal.getDonorContact(id);
        }
        public Boolean addDonation(Donation donation)
        {
            return _donorsDal.addDonation(donation);
        }
        public Boolean addDonorContact(DonorContact donorContact)
        {
            return _donorsDal.addDonorContact(donorContact);
        }
        
        public Boolean updateDonationsThanks(int[] listIndex)
        {
            return _donorsDal.updateDonationsThanks(listIndex);
        }
    }
}

