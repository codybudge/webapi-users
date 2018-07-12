using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using API_Users.Models;

namespace API_Users.Repositories
{
  public class KeepsRepository
  {
     private readonly IDbConnection _db;
    
    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    public IEnumerable<Keeps> GetAll()
    {
      return _db.Query<Keeps>("SELECT * FROM keeps");
    }

    public  Keeps GetById(int id)
    {
      return _db.Query<Keeps>("Select * FROM keeps WHERE id=@id", new{id}).FirstOrDefault();
      }

      public Keeps AddKeeps(Keeps newVault)
      {
        string id = _db.ExecuteScalar<string>(@"
        INSERT INTO keeps (name, description)
        VALUES(@Name, @Description);
         SELECT LAST_INSERT_ID()", newVault);
        newVault.userId = id;
        return newVault;
      }
  }
}