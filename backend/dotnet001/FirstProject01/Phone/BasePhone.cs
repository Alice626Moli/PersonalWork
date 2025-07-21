using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.Phone
{
    public abstract class BasePhone
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }

        public int VersionNo {  get; set; }

        public void call()
        {


        }

        public void text()
        {

        }

        public void PlayGame(Game game)
        {

            game.Start();

        }

        public virtual void VirtualCall()
        {
            Console.WriteLine($"{GetType().Name}VirtualCall");
        }

        public abstract void SystemInfo();

    }
}
