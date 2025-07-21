
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FirstProject01.MediaLibrary.AfterReview
{


    
        public class MediaDatabase
        {
            private List<MediaItem> _mediaItems = new List<MediaItem>();

            public void Add(MediaItem item)
            {
                _mediaItems.Add(item);
            }

            public void PrintMediaInfo()
            {
                foreach (MediaItem item in _mediaItems)
                {
                    item.Print();
                }
            }
        }
    
}

