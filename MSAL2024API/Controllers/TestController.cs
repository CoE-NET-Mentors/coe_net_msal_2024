using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
namespace MSAL2024API.Controllers
{

    [Authorize, Route("api/test"), RequiredScope("access_as_user")]
    public class TestController : Controller
    {

        // GET: api/values
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(new { time = DateTime.Now.ToString("s") });
        }
    }
}