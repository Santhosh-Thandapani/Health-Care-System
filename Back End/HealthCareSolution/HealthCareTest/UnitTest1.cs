using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.Context;
using HealthCareApp.Services;
using Microsoft.EntityFrameworkCore;

namespace HealthCareTest
{
    [TestClass]
    public class UnitTest
    {

        public DbContextOptions<HealthCareContext> GetDbcontextOption()
        {
            var contextOptions = new DbContextOptionsBuilder<HealthCareContext>()
                                   .UseInMemoryDatabase(databaseName: "healthCareMemory")
                                    .Options;
            return contextOptions;
        }

        [TestMethod]
        public async Task TestGetAllPatientRepo()
        {
            using (var healthCareContext = new HealthCareContext(GetDbcontextOption()))
            {

                healthCareContext.Patients.Add(new Patient
                {
                    PatientId = "001",
                    Name = "Gimu G",
                    DateOfBirth = new DateTime(2001, 02, 14),
                    Age = 22,
                    ContactNo = "9876543210",
                    Address = "4 ,Chennai",
                    User = new User() { UserId = "001", PasswordHash = new byte[] { }, PasswordKey = new byte[] { }, Role = "Patient", Status = "Not Approved" },
                }); ; ;
                await healthCareContext.SaveChangesAsync();
                IRepo< User,string> repo = new UserRepo(healthCareContext);
                var data = await repo.GetAll();
                Assert.AreEqual(1, data.ToList().Count);

            }

        }
    }
}