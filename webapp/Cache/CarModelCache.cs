using System;
using AEPLCore.Cache.Interfaces;
using DAL.Model;

namespace webapp
{
  public class CarModelCache : ICarModelCache
  {

    private readonly IDataAccess _dataAccess;
    private readonly ICacheManager _cacheProvider;
    public CarModelCache(IDataAccess dataAccess, ICacheManager cacheProvider)
    {
      _dataAccess = dataAccess;
      _cacheProvider = cacheProvider;
    }

    public CarDetails getCarModelDetails(int modelId) {
      string key = "CarModel_{0}";
      string cacheKey = string.Format(key, modelId);
      var cachedDetails = _cacheProvider.GetFromCache<CarDetails>(cacheKey);
      var details = _cacheProvider.GetFromCache<CarDetails>(cacheKey, new TimeSpan(0, 5, 0),() => _dataAccess.getCarData());
      return details;
    }
  }
}