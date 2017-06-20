using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Todo.BusinessModels
{
    public class Task
    {
        int TaskId { get; set; }
        string TaskDescription { get; set; }
        int UserId { get; set; }
        DateTime DateSubmitted { get; set; }
        DateTime DateExpired { get; set; }
    }
}