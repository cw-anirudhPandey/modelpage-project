using System;
using System.Collections.Generic;

namespace webapp.Model
{
  public class CarDetailsViewModel
  {
    public string MakeName { get; set; }
    public string ModelName { get; set; }
    public string ImageUrl { get; set; }
    public double Rating { get; set; }
    public int ReviewCount { get; set; }
    public HashSet<string> CitySet { get; set; }
    public HashSet<string> VersionSet { get; set; }
    public List<PriceVersionDetail> PriceDetailsList { get; set; }
    public EmiDetails EmiDetail { get; set; }
  }
}