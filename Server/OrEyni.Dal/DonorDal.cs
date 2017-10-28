using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OrEyni.Entities;

namespace OrEyni.Dal
{
    public class DonorsDal
    {

        public List<Donor> GetDonors()
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Donors.Where(x => x.IsActive == true).ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public Boolean updateDonorDetailes(Donor donor)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (donor != null)
                {
                    var fromDB = context.Donors.First(x => x.ID == donor.ID);
                    //context.Donors.Remove(fromDB);
                    //context.Donors.Add(donor);

                    fromDB.FirstName = donor.FirstName;
                    fromDB.LastName = donor.LastName;
                    fromDB.Phone = donor.Phone;
                    fromDB.E_mail = donor.E_mail;
                    fromDB.FullAdress = donor.FullAdress;
                    fromDB.Details = donor.Details;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public int createNewDonor(Donor donor)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (donor != null)
                {
                    donor.ID = context.Donors.Max(x => x.ID) + 1;
                    donor.IsActive = true;
                  //  context.Entry(donor).State = System.Data.Entity.EntityState.Added;
                    context.Donors.Add(donor);
                    context.SaveChanges();
                    return donor.ID;
                }
             //   context.Entry(donor).State = System.Data.Entity.EntityState.Modified;

                return 0;
                
            }

        }

        public Boolean deleteDonor(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (id != 0)
                {
                    context.Donors.First(x => x.ID == id).IsActive = false;
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public List<Donation> GetDonation(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.Donations.Where(x => x.DonorID == id).ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public List<DonorContact> getDonorContact(int id)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                var fromDB = context.DonorContacts.Where(x => x.DonorID == id).ToList();
                if (fromDB != null)
                    return fromDB;
                return null;
            }
        }
        public Boolean addDonation(Donation donation)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (donation != null)
                {   
                    
                    donation.Id = context.Donations.Max(x => x.Id) + 1;
                    context.Donations.Add(donation);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean addDonorContact(DonorContact donorContact)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (donorContact != null)
                {
                    donorContact.ID = context.DonorContacts.Max(x => x.ID) + 1;
                    context.DonorContacts.Add(donorContact);
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        public Boolean updateDonationsThanks(int[] listIndex)
        {
            using (OrEnayEntities context = new OrEnayEntities())
            {
                if (listIndex != null)
                {
                    //for (var i = 0; listIndex[i] != 0; i++)
                    foreach (var i in listIndex)
                    {
                        var id = i;
                        var donat = context.Donations.FirstOrDefault(x => x.Id == id);
                        if(donat != null)
                            donat.IsThank = !donat.IsThank;
                    }
                    context.SaveChanges();
                    return true;
                }
                return false;
            }
        }
        
    }
}