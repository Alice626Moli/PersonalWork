using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Collection_C_.Collections
{
    public class LinkedList
    {

        LinkedList<int> intsList = new LinkedList<int>();
        //创建一个链表对象 intsList，用于存放整数（int 类型）


        public void TestLinkedList()  // 定义一个公共方法 TestLinkedList()，用于演示链表操作
        {
            intsList.AddFirst(1);
            //向链表最前面添加一个元素 1

            LinkedListNode<int> node1 = intsList.First;

            // 获取链表的第一个节点（值是 1），命名为 node1
            intsList.AddBefore(node1, 122);
            // 在 node1（即 1）之前插入值 122
            //链表变成：[122] → [1]


            int i = intsList.First.Value;    //取出第一个节点的值（122）
            LinkedListNode<int> firstNode = intsList.First;
            LinkedListNode<int> j = intsList.Find(2); //在链表中查找值为 2 的节点，如果没有会返回 null
             if(j != null) { int jvalue = j.Value; }  //取出 j 这个节点中存的值，赋给 jvalue 变量


            LinkedListNode<int> findValue = intsList.Find(122);
           
            intsList.Remove(2);
            intsList.Remove(j);
            intsList.Remove(findValue);

        }
    }
}
