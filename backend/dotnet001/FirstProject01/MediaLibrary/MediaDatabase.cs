using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.MediaLibrary
{
    public class MediaDatabase
    {

        private List<CD> ListCD = new List<CD>();
        private List<DVD> ListDVD = new List<DVD>();


        public void Add(CD cd)
        {
            ListCD.Add(cd);
        }

        public void Add(DVD dvd)
        {

            ListDVD.Add(dvd);
        }


        public void PrintMediaInfo()
        {
            foreach (CD cd in ListCD)
            {
                cd.Print();
            }

            foreach (DVD dvd in ListDVD)
            {
                dvd.Print();
            }




        }
    }
}
