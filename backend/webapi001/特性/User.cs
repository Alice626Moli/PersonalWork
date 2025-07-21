using Demo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace 特性
{

    public class User
    {
        [ModelCustom(2, true)]
        public string Name { get; set; };



        [ModelCustom(3, true)]
        public string Email
        {
            get, set };
        }
    }
}

