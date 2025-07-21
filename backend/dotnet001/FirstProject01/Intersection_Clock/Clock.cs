using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace FirstProject01.Intersection_Clock
{
    internal class Clock
    {

        private Display _hour = new Display(24);  //没有赋值的时候，是null空的
        private Display _minute = new Display(60);

        public void Start()
        {
            while (true)
            {
                _minute.Increase();


                if (_minute.DisplayValue() == 0)
                {
                    _hour.Increase();
                }

                Console.WriteLine("${_hour.DisplayValue()}:{_minute.DisplayValue()}");
            }

        }

    }
}

