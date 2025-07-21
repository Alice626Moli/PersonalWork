


using System;

namespace PraticeModel;


    class Book
{
    public string Title;
    public string Author;

    public Book(string title, string author)
    {
        Title = title; Author = author; };

    public void Describe()
    {
        Console.WriteLine($"The book name is {Title}, the book authos is {Author}");
    }


    public int Age { get { return _age}; set { _age =value }; }
}

class Program
{
    static void Main()
    {
        Book book1 = new Book("1984", "geogre");
        Book book2 = new Book("nuoweisenlin1", "cushang");

        book1.Describe();
        book2.Describe();
    }
}
}