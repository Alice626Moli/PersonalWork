using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01
{
    internal class PropertyLearning
    {

        int  _age;

        /// <summary>
        ///  C# 会自动生成隐藏的 _Name这样的字段
        /// </summary>
        public string Name { get; set; }


        public int Age {
            get { return _age; }
            set
            { _age = value; }
                }

        public string FirstName { get; set; } = "Tom";
        public string LastName { get; init; }

        public string MiddleName { get; private set; }
        public void TestMethod()
        {

            MiddleName = "Kara";
            Console.WriteLine($"Your first name is {FirstName}, and last name is {LastName}");
        }

    }
}
