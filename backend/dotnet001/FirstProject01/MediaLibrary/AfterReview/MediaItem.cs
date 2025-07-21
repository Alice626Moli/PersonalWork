namespace FirstProject01.MediaLibrary.AfterReview

{
    public class MediaItem
    {
        protected string title;
        protected bool gotIt;
        protected string comment;

        // ✅ 空构造函数
        public MediaItem() { }

        // ✅ 有参构造函数
        public MediaItem(string title, bool gotIt, int playingTime, string comment)
        {
            this.title = title;
            this.gotIt = gotIt;
            this.comment = comment;
        }

        // ✅ 打印方法
        public void Print()
        {
            Console.WriteLine($"{title} {comment} {gotIt}");
        }

        // ❌ 不要再写额外的 “}” 了，类在这里正确结束
    }
}

