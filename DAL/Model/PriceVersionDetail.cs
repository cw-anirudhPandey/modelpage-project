using System;
using System.Collections.Generic;

namespace DAL.Model
{
  [Serializable]
    public class PriceVersionDetail
    {

        public string Price {get; set;}
        public string Version { get; set; }
        public string City { get; set; }
  }
}
