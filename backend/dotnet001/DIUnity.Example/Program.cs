using DIUnity.Example.Cars;
using Unity;

namespace DIUnity.Example
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ICar bmw = new BMW();
            bmw.Run();

            ICar ford = new Ford();
            ford.Run();

            #region 

            //var services = new ServiceCollection();


       

            #endregion

            #region

            //Driver driver = container.Resolve<Driver>("bmw");
            //driver.RunCar();
            //1,没有register driver
            //2,自动识别功能


            #endregion
        }
    }
}
