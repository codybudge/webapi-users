using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Users.Models;
using API_Users.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API_Users.Controllers
{
  [Route("api/[controller]")]
  public class VaultKeepsController : Controller
  {
    private readonly VaultKeepsRepository _db;
    public VaultKeepsController(VaultKeepsRepository repo)
    {
      _db = repo;
    }
    [HttpPost]
    public VaultKeep CreateVaultKeep([FromBody]VaultKeep newVaultKeep)
    {
      if (ModelState.IsValid)
      {
        var user = HttpContext.User;
        var id = user.Identity.Name;
        newVaultKeep.UserId = id;
        return _db.CreateVaultKeep(newVaultKeep);
      }
      return null;
    }

    [HttpGet("{vaultId}")]
    public IEnumerable<Keeps> GetKeepsInVault(int vaultId)
    {
      return _db.GetByKeepsInVault(vaultId);
    }

  }

}