using DAL.Model;

namespace webapp
{
  public interface ICarModelCache
  {
    CarDetails getCarModelDetails(int modelId);
  }
}