using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.Phone
{

    //    属性：

    //name（学生姓名，字符串）

    //score（分数，整数）

    //构造函数：

    //传入 name 和 score 初始化对象时自动赋值

    //普通方法：

    //一个 printinfo() 方法，打印出：

    //copy
    //edit
    //学生：张三，分数：90

    public class Student
    {

        int _mark;
        string _name;

        public Student(string name, int mark)
        {

            _name = name;
            _mark = mark;

        }


        public void PrintInfo()
        {

            Console.WriteLine("The name is {name}, score is {mark}");



        }


    }
}
