using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrEyni.Entities.Model
{
    class ChildModel
    {
        public int ID { get; set; }
        public Nullable<int> FamilyChildID { get; set; }
        public string FirstName { get; set; }
        public string TZ { get; set; }
        public Nullable<int> HMOID { get; set; }
        public Nullable<int> SchoolID { get; set; }
        public Nullable<int> ProblemID { get; set; }
        public string Notes { get; set; }

    }
}
