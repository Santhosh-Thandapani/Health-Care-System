using HealthCareApp.Models;
using HealthCareApp.Models.DTO;

namespace HealthCareApp.Interfaces
{
    public interface IAdapterService
    {
        public Task<User> DoctorDTOUserAdapter(DoctorDTO doctor,int count);
        public Task<User> PatientDTOUserAdapter(PatientDTO patient,int count);
    }
}
