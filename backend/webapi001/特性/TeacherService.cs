using System; // 导入基础命名空间，包含 Attribute、Console 等常用类型。
using System.Collections.Generic; // 导入泛型集合类，例如 List<>。
using System.Linq; // 引入 LINQ 功能，用于集合查询等（此处暂未用到）。
using System.Text; // 引入文本处理类（此处未使用）。
using System.Threading.Tasks; // 引入异步任务支持（此处未使用）。

namespace 特性 // 自定义命名空间“特性”，用于组织代码。
{
    [AttributeUsage(AttributeTargets.Property)] // 声明该特性仅能用于属性上。
    public class ModelCustomAttribute : Attribute // 自定义属性类，继承自 Attribute。
    {
        public int MaxLength { get; set; } // 最大长度限制，整数类型，支持 get/set。
        public bool IsRequired { get; set; } // 是否为必填项，布尔类型，支持 get/set。

        public ModelCustomAttribute(int maxLength, bool isRequired) // 构造函数，接收两个参数用于初始化属性。
        {
            this.MaxLength = maxLength; // 初始化 MaxLength。
            this.IsRequired = isRequired; // 初始化 IsRequired。
        }
    }
}
