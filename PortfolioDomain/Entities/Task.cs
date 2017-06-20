namespace WebUI.Models
{
    using System;

    public partial class Task
    {
        public int postID { get; set; }

        public string postDescription { get; set; }

        public string postAuthor { get; set; }

        public DateTime? postDate { get; set; }
    }
}
