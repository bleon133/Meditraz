

using MediTrazAppFinal.Models;
using Microsoft.EntityFrameworkCore;

namespace MediTrazAppFinal.Data
{
    public class ApplicationDBContext: DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {

        }

        public DbSet<Charge> charge { get; set; }
        public DbSet<User> user { get; set; }

        public DbSet<GeneralAreas> generalAreas { get; set; }

        public DbSet<storedMedicine> storedMedicines { get; set; }

        public DbSet<transpEquipment> transpEquiments { get; set; }

        public DbSet<OrderMedecines> orderpMediciness { get; set; }

        public DbSet<medicationManagement> medicicationManagements { get; set; }

    }
}
