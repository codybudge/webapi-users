using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using API_Users.Models;

namespace API_Users.Repositories
{
  public class VaultRepository
  {
    private readonly IDbConnection _db;
    
    public VaultRepository(IDbConnection db)
    {
      _db = db;
    }
    public IEnumerable<Vault> GetAll()
    {
      return _db.Query<Vault>("SELECT * FROM vaults");
    }

    public  Vault GetById(int id)
    {
      return _db.Query<Vault>("Select * FROM vaults WHERE id=@id", new{id}).FirstOrDefault();
      }

      public Vault AddVault(Vault newVault)
      {
        string id = _db.ExecuteScalar<string>(@"
        INSERT INTO vaults (name, description)
        VALUES(@Name, @Description);
         SELECT LAST_INSERT_ID()", newVault);
        newVault.userId = id;
        return newVault;
      }
    }

}