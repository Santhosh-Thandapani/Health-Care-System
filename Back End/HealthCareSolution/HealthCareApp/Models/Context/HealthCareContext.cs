using Microsoft.EntityFrameworkCore;

namespace HealthCareApp.Models.Context
{
    public class HealthCareContext : DbContext
    {
        public HealthCareContext(DbContextOptions options): base (options)
        {
            
        }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
