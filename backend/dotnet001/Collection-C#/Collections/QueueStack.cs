using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collection_C_.Collections
{
    public class QueueStack
    {
        Queue<string> message = new Queue<string>();
        public void QueueTest()
        {
            message.Enqueue("A");
            message.Enqueue("B");
            message.Enqueue("C");


            string firstout = message.Dequeue();
            string secondout = message.Dequeue();
            string thirdout = message.Dequeue();

            message.Peek();

            for (int i = 0; i < message.Count; i++)
            {
                string s = message.Dequeue();
            }
        }

        Stack <int> intStack = new Stack<int>();
        public void StackMethod()
        {
            intStack.Push(1); // 压入数字 1，栈底是 1
            intStack.Push(2); // 再压入 2，栈顶变成 2
            intStack.Push(3); // 压入 3，现在栈顶是 3，栈顺序是 [1, 2, 3]

            intStack.Pop(); // 弹出栈顶元素（3 被移除），现在栈顶是 2

            int currentValue = intStack.Peek(); // 查看当前栈顶元素（2），但不移除它
        }







    }
}

