using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using MySql.Data.MySqlClient;
using DAL.Model;

public class DataAccess : IDataAccess
{
  private readonly string _connection = "SERVER=10.10.20.115;Port=3306;UID=training;PASSWORD=training;DATABASE=training;Min Pool Size=1;Max Pool Size=300";

  public List<string> getCityList()
  {
    List<string> cityList = new List<string>();
    try
    {
      using (IDbConnection conn = new MySqlConnection(_connection))
      {
        string query = "SELECT city FROM cities";
        var Cities = conn.Query<string>(query).ToList();
        Cities.ForEach(city => cityList.Add(city));
        return cityList;
      }
    }
    catch (Exception e)
    {
      Console.WriteLine("Exception Occured: " + e.Message);
      return cityList;
    }
  }

  public CarDetails getCarData()
  {
    CarDetails details;
    try
    {
      using (IDbConnection conn = new MySqlConnection(_connection))
      {
        string query = @"Select _carMake.carMakeName as MakeName,
                        _carModel.carModelName as ModelName,
                            _carImage.carImage as ImageUrl,
                        avg(_carReview.carRating) as Rating,
                            count(_carReview.carRating) as ReviewCount
                            From
                            _carMake inner join _carModel 
                            on _carMake.carMakeId = _carModel.carMakeId
                                    inner join _carImage
                                    on _carModel.carModelId = _carImage.carModelId
                                    inner join _carReview
                                    on _carImage.carModelId = _carReview.carModelId
                        Where 
                            _carMake.carMakeId = 0
                                And
                            _carModel.carModelId = 4
                        group by 
                            _carImage.carImage;";
        details = conn.QueryFirst<CarDetails>(query);
        query = @"Select _carVersion.carVersionName as Version,
                        _carPrice.carPrice as Price,
                            _city.cityName as City
                            From
                            _carVersion inner join _carPrice
                                    on _carVersion.carVersionId = _carPrice.carVersionId
                                    inner join _city
                                    on _carPrice.cityId = _city.cityId
                        Where 
                          _carVersion.carModelId = 4;
                            ";
        List<PriceVersionDetail> priceVersionDetailList = conn.Query<PriceVersionDetail>(query).ToList();
        HashSet<string> citySet = new HashSet<string>(),
                        versionSet = new HashSet<string>(); 
        priceVersionDetailList.ForEach(detail=>{
          citySet.Add(detail.City);
          versionSet.Add(detail.Version);
        });
        details.CitySet = citySet;
        details.VersionSet = versionSet;
        details.PriceDetailsList = priceVersionDetailList;
        details.EmiDetail = new EmiDetails
        {
          cost = "10,719",
          duration = "5 years"
        };
        return details;
      }
    }
    catch (Exception e)
    {
      Console.WriteLine("Exception Occured: " + e.Message);
      return null;
    }

  }

  // public CarModel getCarData()
  // {
  //   EmiDetails emiDetail = new EmiDetails
  //   {
  //     cost = "10,719",
  //     duration = "5 years"
  //   };
  //   ReviewDetails reviewDetail = new ReviewDetails
  //   {
  //     rating = 3,
  //     totalReviewCount = 312
  //   };
  //   PriceDetails priceDetail = new PriceDetails
  //   {
  //     price = "6.62 Lakhs",
  //     carType = "On - Road, Mumbai"
  //   };
  //   CarModel model = new CarModel
  //   {
  //     ReviewDetail = reviewDetail,
  //     EmiDetail = emiDetail,
  //     PriceDetail = priceDetail,
  //     cityList = getCityList(),
  //     versionList = getVersionList(),
  //     name = "Maruti Suzuki Swift",
  //     imageUrl = "https://imgd.aeplcdn.com/664x374/n/cw/ec/26742/swift-exterior-right-front-three-quarter-117655.gif?q=85"
  //   };
  //   return model;
  // }

}