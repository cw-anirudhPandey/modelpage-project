using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DAL.Model;

namespace webapp.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class CarModelController : ControllerBase
  {
    private readonly ILogger<CarModelController> _logger;
    private readonly ICarModelCache _carModelCache;

    public CarModelController(ILogger<CarModelController> logger, ICarModelCache carModelCache)
    {
      _logger = logger;
      _carModelCache = carModelCache;
    }

    [HttpGet]
    public CarDetails Get()
    {
      return _carModelCache.getCarModelDetails(4);
    }
  }
}

