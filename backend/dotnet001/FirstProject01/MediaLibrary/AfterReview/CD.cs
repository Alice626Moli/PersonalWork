using FirstProject01.CD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.MediaLibrary.AfterReview;

public class CD : MediaItem
{

    private string artist;
    private int numberOfTracks;
    private int playingTime;


    public CD(string title, string artist, int numberOfTracks, string comments)
    {
        this.title = title;
        this.artist = artist;
        this.numberOfTracks = numberOfTracks;
        playingTime = 0;
        gotIt = false;
        comment = comments;
    }

    //public void Print()
    //{
    //    Console.WriteLine($"{title} {artist} {numberOfTracks} {playingTime} {comment}");
    //}
}

