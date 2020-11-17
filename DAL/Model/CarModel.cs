using System;
using System.Collections.Generic;

namespace DAL.Model
{
    public class CarModel
    {
        public string name { get; set; }

        public ReviewDetails ReviewDetail { get; set; }

        public List<string> versionList {get; set;}

        public List<string> cityList {get; set;}

        public PriceDetails PriceDetail { get; set;}

        public EmiDetails EmiDetail {get; set;}

        public string imageUrl {get; set;}

    }
}
