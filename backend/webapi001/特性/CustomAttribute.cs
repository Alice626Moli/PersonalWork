using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 特性
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class | AttributeTargets.Property) ]

    public class CustomAttribute :Attribute

    {

        public string Name { get; set; };

        public bool IsEnable { get; set; } = false;

        public CustomAttribute (string name)
        {
        this.Name = name;
        }

        public CustomAttribute (string name, bool enable)
        {

            this.IsEnable = enable;
            this.Name = name;
        }

    }
}
