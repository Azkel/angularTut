using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_proj.Models;
using Microsoft.AspNetCore.Mvc;

namespace api_proj.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/person
        [HttpGet("Person")]
        public Person Person(int id)
        {
            return new Person() {
                FirstName = "John",
                LastName = "Doe",
                ImgSrc = "https://cdn0.iconfinder.com/data/icons/smile-emoticons/78/Emoticons_smile_smiley-03-512.png"
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
