using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;

namespace Gyuson.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {

        private readonly GyusonDBContext _gyusonContext;
        public CandidatesController(GyusonDBContext gyusonContext)
        {
            _gyusonContext = gyusonContext;
        }

        [HttpGet]
        public ActionResult GetAllCandidates()
        {
            var result = _gyusonContext.VAllCandidates.ToArray();

            return Created("", result);
        }

        [HttpGet]
        public ActionResult GetAllLanguages()
        {
            var result = _gyusonContext.Languages.ToArray();

            return Created("", result);
        }



    }
}
