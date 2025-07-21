using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace VendingMachine
{
    public class VendingMachine
    {

        int price = 2;
        int balance;
        int total;
        ///告诉vending machine，有三个特有的东西


        public void ShowPrompt ()
        {
            Console.WriteLine("Welcome to the machine");

        }

        public void InsertMoney(int amount)
        {
            balance = balance + amount;
        }

        public void ShowBalance()
        {
            Console.WriteLine($"{balance}");
        }


        public void ShowTotal()
        {
            Console.WriteLine($"{total}");
        }

        public void GetVendingItem()
        {
            if(balance>= price)
            {
                Console.WriteLine("Enjoyn ur purchase");
                balance = balance - price;
                total = total + price;
            }

            else
            {
            Console.WriteLine("U dont have enough balance!");    
            }
        }

    }
}
