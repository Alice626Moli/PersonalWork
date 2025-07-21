using DIUnity.Example.Cars;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Unity;

namespace DIUnity.Example
{
    public class Driver
    {
        


        [Dependency]
       public ICar Car { get;  set; }



        public void RunCar()
        {
            Car.Run();
        }
    }
}
