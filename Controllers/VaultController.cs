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
    // [ApiController]
  public class VaultController: Controller
  {
    private readonly VaultRepository db;
    public VaultController(VaultRepository repo)
    {
      db = repo;
    }

    //GET api/vaults
    [HttpGet]
    public IEnumerable<Vault> Get()
    {
      return db.GetAll();
    }

    //GET api/vaults/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpGet("{id}")]
    public Vault Get(string id)
    {
      return db.GetById(id);
    }

    //POST api/vaults
    [HttpPost]
    public Vault Post([FromBody]Vault newVault)
    {
      if (ModelState.IsValid)
      {
        return db.AddVault(newVault);
      }
      return null;
    }

    //PUT api/vaults/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpPut("{id}")]
    public void Put(string id, [FromBody]string value)
    {
    }

    //DELETE api/vaults/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpDelete("{id}")]
    public void Delete(string id)
    {
    }
  }
}