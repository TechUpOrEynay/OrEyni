//using OrEyni.Model;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using OrEyni.Entities;
//namespace OrEyni.Dal
//{
//    public class ContactsDal
//    {
//        public List<Contact> GetContacts()
//        {
//            using (OrEnayEntities context = new OrEnayEntities())
//            {
//                return context.Contact.ToList();
//            }
//        }

        
//        public Contact GetContact(int id)
//        {
//            using (AyelletEntities context = new AyelletEntities())
//            {
//                return context.Contact.FirstOrDefault(c => c.ContactId == id);
//            }
//        }
//    }
//}
