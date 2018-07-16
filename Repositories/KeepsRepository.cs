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

      public Keeps AddKeeps(Keeps newKeeps)
      {
        _db.ExecuteScalar<string>(@"
        INSERT INTO keeps (url, name, description, userId)
        VALUES(@Url, @Name, @Description, @userId);   
         SELECT LAST_INSERT_ID()", newKeeps);
        
        return newKeeps;
      }
  }
}