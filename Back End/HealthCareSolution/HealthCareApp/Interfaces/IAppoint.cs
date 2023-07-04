using HealthCareApp.Models;
using HealthCareApp.Models.DTO;

namespace HealthCareApp.Interfaces
{
    public interface IAppoint
    {
        public Task<Appointment?> Add(Appointment appointment);
        public Task<Appointment?> Delete(Appointment appointment);
        public Task<ICollection<Appointment>> GetAppoByDoc(AppoDTO app);
        public Task<ICollection<Appointment>> GetAppoBypatient(AppoDTO app);

    }
}
