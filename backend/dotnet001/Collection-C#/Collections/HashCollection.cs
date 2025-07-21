using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Collection_C_.Collections
{
    public class HashCollection
    {

        //既不是顺序存储也不是链表方式，没有前后指针关系
        HashSet<string> hashStrings = new HashSet<string>();

        public void TestHashString()
        {

            //根据值计算对应的hash值，作为地址保存在内存中
            //
            hashStrings.Add("123");
            hashStrings.Add("1244");
            hashStrings.Add("123");
            hashStrings.Add("23424");

            //正因为是计算出一个地址（hash值）所以运算，读取很快

            hashStrings.Remove("123");

            HashSet<string> otherSet = new HashSet<string>();

            hashStrings.ExceptWith(otherSet);
            // 从当前集合中移除所有在 otherSet 中也存在的元素（差集）

            hashStrings.IntersectWith(otherSet);
            // 只保留当前集合中也存在于 otherSet 的元素（交集）

            hashStrings.UnionWith(otherSet);
            // 把 otherSet 中的所有元素加进当前集合（并集，自动去重）

            hashStrings.SymmetricExceptWith(otherSet);
            // 只保留两个集合中不重复的部分（对称差集：A ∪ B - A ∩ B）


        }



        SortedSet<string> sortedStrings = new SortedSet<string>();
        public void SortedSetTest()
        {

            sortedStrings.Add("123");
            sortedStrings.Add("1243A");
            sortedStrings.Add("1231343b");

            string min = sortedStrings.Min();
            string max = sortedStrings.Max();
            //排大小

            sortedStrings.GetViewBetween(min, max);
            // 会返回一个子集 subSet，只包含值在 "b" 和 "m"（含边界）之间的元素，
            // 按原顺序自动排序


        }





        #region
        //hash算法，计算一个内存地址，把某个东西保存在地址中，因此读取比较快
        //同时是分散存储的，增删比较快

        Hashtable hashTable = new Hashtable();
        public void hashTableTest()
        {
            hashTable.Add("123", 123); //根据key来计算  ，key就是双引号的内容，得到一个地址，把key和value都保存到该地址中
            hashTable.Add("222", 222);

 //假如不同的key在哈希算法后是一样的地址，会在后一个值自动+1
 //在hashtable里会根据key读取，如果多个地址


            //foreach (KeyValuePair<string, int> v in hashTable)  //keyvaluepair， 键值对   不能将数据保存为该类型
            //{
            //    Console.WriteLine($"Key:{v.Key}");
            //    Console.WriteLine($"Value:{v.Value}");

            //}

            foreach (DictionaryEntry item in hashTable)
            {
                Console.WriteLine(item.Key);
                Console.WriteLine(item.Value.ToString());
            }

        }

        #endregion



        #region
        Dictionary<int, string> dictionary = new Dictionary<int, string>();
        public void TestDictionary()
        {
            dictionary.Add(123，"1鸡看鸡l");
            dictionary.Add(1213, "1212");
            dictionary.Add(144, "1212");


            foreach (DictionaryEntry item in dictionary)
            {
                Console.WriteLine(item.Key);
            }

            foreach(KeyValuePair<int, string> pair in dictionary)
            {
                Console.WriteLine(pair.Key);   //倒反天罡，在dictionary里面存的反而是KeyValuePair 
            }

            IList < KeyValuePair<string, int> > s = new List<KeyValuePair<string, int>>();



        }


        #endregion
    }
}



    

