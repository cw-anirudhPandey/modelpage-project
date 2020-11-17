using System.Collections.Generic;
using DAL.Model;

public interface IDataAccess
{
  List<string> getCityList();
  // List<string> getVersionList();
  CarDetails getCarData();
}