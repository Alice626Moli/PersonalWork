using FirstProject01.CD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.MediaLibrary.AfterReview;

public class DVD : MediaItem
{

  
    private string director;
    private int playingTime;


    public DVD(string title, string director, string comments) : base(title, false, 0, comments)
    {
        this.title = title;
        this.director = director;
        playingTime = 0;
        gotIt = false;
        comment = comments;
    }

    //public void Print()
    //{
    //    Console.WriteLine($"{title} {director} {playingTime} {comment}");
    //}

}
