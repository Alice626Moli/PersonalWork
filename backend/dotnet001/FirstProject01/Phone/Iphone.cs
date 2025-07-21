using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.Phone
{
    public class Iphone : BasePhone,IAIFunction
    {

        public override void VirtualCall()
        {
            base.VirtualCall();
            Console.WriteLine($"{GetType().Name}");
        }

        public override void SystemInfo()
        {
            Console.WriteLine("${GetType().Name} system is  Huawei"); 
        }


        public void DoAIFunction()
        {
            Console.WriteLine("123");
        }

    }
}
