using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace WebApiMooc.Controllers
{
    [Route("api/[controller]")]  
    [ApiController]
    public class RouterController : ControllerBase
    {


        [HttpGet]

        public IActionResult GetMessage()
        {
            return Ok(new { Name = "Chaewon", Age = 30 });

        }

        [HttpGet]

        [Route ("test/getinfo")]

        public IActionResult GetSpecificMessage()
        {
            return Ok(new { Name = "KCW", age = 25 });
        }



        [HttpPost]
        public IActionResult AddUserWithoutFormbody ([FromForm] User user)
        {
            return JsonResult(new CommonResult() { IsSuccess = true, Message = "", Results = user });
        }



        [HttpGet]
        public IActionResult GetUserInfoById(int id, string name)
        {
            var result = new
            {
               UserId = id,
               name = name,
               Email = EmailAddressAttribute
            }

            return Ok(result);
    }



}
}
