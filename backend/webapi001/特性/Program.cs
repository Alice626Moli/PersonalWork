using System;
using System.Reflection;

namespace Demo
{
    [AttributeUsage(AttributeTargets.Property)]
    public class ModelCustomAttribute : Attribute
    {
        public bool IsRequired { get; set; }
        public int MaxLength { get; set; }

        public ModelCustomAttribute(bool isRequired = false, int maxLength = int.MaxValue)
        {
            IsRequired = isRequired;
            MaxLength = maxLength;
        }
    }

    public class User
    {
        [ModelCustomAttribute(true, 5)]
        public string Name { get; set; }

        [ModelCustomAttribute(false, 10)]
        public string Address { get; set; }

        public int Age { get; set; } // 没有加特性
    }

    class Program
    {
        static void Main(string[] args)
        {
            var user = new User
            {
                Name = "TooLongName",
                Address = null,
                Age = 25
            };

            var userType = typeof(User);
            // 获取 User 类的类型信息，用于反射操作。

            var userProperties = userType.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            // 获取 User 类中所有 public 实例属性，形成 PropertyInfo 数组。

            foreach (var property in userProperties)
            // 遍历每个属性，进行验证处理。

            {
                var attr = property.GetCustomAttribute<ModelCustomAttribute>();
                // 获取该属性上自定义的 ModelCustomAttribute 特性，若无则为 null。

                var value = property.GetValue(user);
                // 获取该属性在 user 对象中的实际值。

                if (attr != null)
                // 如果该属性上有自定义特性，才执行后续验证逻辑。

                {
                    if (value != null && attr.IsRequired)
                    // 如果值不为 null 且该属性被标记为必须填写。

                    {
                        var valueString = value.ToString();
                        // 将值转为字符串形式，便于判断长度。

                        if (valueString.Length > attr.MaxLength)
                        // 如果长度超过设定的最大值。

                        {
                            Console.WriteLine($"属性 {property.Name} 超过最大长度 {attr.MaxLength}");
                            // 输出错误信息，提示该属性超长。
                        }
                    }
                    else
                    // 如果值为 null 或不是必填项。

                    {
                        if (property.PropertyType == typeof(string))
                        // 如果属性类型是字符串（string）。

                        {
                            Console.WriteLine($"属性 {property.Name} 不能为空");
                            // 输出信息提示该属性不能为空（即便非必填，只对 string 提示）。
                        }
                    }
                }
            }

        }
    }
}
