using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace FirstProject01
{
    internal class ConstructorLearning
    {

        // 这里是字段赋值
        int _age =11;
        string _name ="abc";
        string _firstname ="sdb";



        //这里是属性
        public int MyProperty { get; set; } = 15;
        public string MyPost { get; set; } 

        public string _WebApi 
        {
            get
            {
                //DB
                //API
                _WebApi = MockAPIReturn();
                return _WebApi;
            }

            set
            {
                _WebApi = value;
            }
        }

        private string MockAPIReturn()
        {
            return "Mock Info";

        }


        //这里是构造函数
        public ConstructorLearning(int i)
        {
            _age = i;
        }

        private Apt (int sk)
        {

        }

        public ConstructorLearning(string s, int i) : this(i)
        {
            _name = s;
        }

        // this() --> constructor chain
        public ConstructorLearning(string s, string t, int i) : this(t, i)
        {
            _firstname = s;
        }



    }
}
