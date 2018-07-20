using System.Collections.Generic;
using System.Data;
using API_Users.Models;
using Dapper;
namespace API_Users.Repositories
{
  public class VaultKeepsRepository : DbContext
  {
    public VaultKeepsRepository(IDbConnection db) : base(db)
    {
    }
    public VaultKeep CreateVaultKeep(VaultKeep newVaultKeep)
    {
      int id = _db.ExecuteScalar<int>(@"
                INSERT INTO vaultkeeps (userId, vaultId, keepId)
                VALUES (@UserId, @VaultId, @KeepId);
                SELECT LAST_INSERT_ID();
            ", newVaultKeep);
      newVaultKeep.Id = id;
      return newVaultKeep;
    }

    public IEnumerable<Keeps> GetByKeepsInVault(int vaultId)
    {
      return _db.Query<Keeps>(@"
      SELECT * FROM vaultkeeps vk
      INNER JOIN keeps k ON k.id = vk.keepId
      WHERE(vaultId = @vaultId)
      ", new { vaultId });
    }
  }
}