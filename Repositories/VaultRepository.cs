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
    public IEnumerable<Vault> GetAll(string id)
    {
      return _db.Query<Vault>("SELECT * FROM vaults WHERE userId = @id", new {id});
    }

    public  Vault GetById(string id)
    {
      return _db.Query<Vault>("Select * FROM vaults WHERE id=@id", new{id}).FirstOrDefault();
      }

      public Vault AddVault(Vault newVault)
      {
        _db.ExecuteScalar<string>(@"
        INSERT INTO vaults (name, description, userId)
        VALUES(@Name, @Description, @userId);
         SELECT LAST_INSERT_ID()", newVault);

        return newVault;
      }
    }

}