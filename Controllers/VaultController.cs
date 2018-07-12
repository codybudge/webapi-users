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
  public class VaultController: Controller
  {
    private readonly VaultRepository db;
    public VaultController(VaultRepository repo)
    {
      db = repo;
    }

    //GET api/vault
    [HttpGet]
    public IEnumerable<Vault> Get()
    {
      return db.GetAll();
    }

    //GET api/vault/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpGet("{id}")]
    public Vault Get(int id)
    {
      return db.GetById(id);
    }

    //POST api/vault
    [HttpPost]
    public Vault Post([FromBody]Vault newVault)
    {
      if (ModelState.IsValid)
      {
        return db.AddVault(newVault);
      }
      return null;
    }

    //PUT api/vault/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    //DELETE api/vault/192bd9837s9_12389x129x38 _273bxb19x36
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}