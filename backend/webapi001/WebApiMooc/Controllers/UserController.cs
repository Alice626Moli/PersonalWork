using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiMooc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {





        [HttpGet]

        public string GetMessage() => "Hello World";

        public IActionResult GetResult()
        {
            var result = new { value = "1", isTrure = true };
            return Ok(result);
        }

        [HttpGet]

        public JsonResult GetJson() { 
        
            return new JsonResult (new {Status = "success", Time = DateTime.Now});
        }






    }
}
