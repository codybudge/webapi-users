using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API_Users.Models;
using API_Users.Repositories;


namespace API_Users.Controllers
{
  [Route("api/[controller]")]
  public class KeepsController : Controller
  {
    private readonly KeepsRepository db;
    public KeepsController(KeepsRepository repo)
    {
      db = repo;
    }

    //GET api/Keeps
    [HttpGet]
    public IEnumerable<Keeps> Get()
    {
      return db.GetAll();
    }

    [HttpGet("mykeeps")]
    public IEnumerable<Keeps> GetUserKeeps()
    {
      var userId = HttpContext.User.Identity.Name;
      return db.GetUserKeeps(userId);
    }

    //GET api/Keeps/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpGet("{id}")]
    public Keeps Get(int id)
    {
      return db.GetById(id);
    }

    [Authorize]
    //POST api/Keeps
    [HttpPost]
    public Keeps Post([FromBody]Keeps newKeeps)
    {
      var userId = HttpContext.User.Identity.Name;
      newKeeps.userId = userId;
      if (ModelState.IsValid)
      {
        return db.AddKeeps(newKeeps);
      }
      return null;
    }

    //PUT api/Keeps/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpPut("{id}")]
    public string Put(int id, [FromBody]Keeps keep)
    {
      db.EditKeep(keep);
      return "Updated";
    }

    //DELETE api/Keeps/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}