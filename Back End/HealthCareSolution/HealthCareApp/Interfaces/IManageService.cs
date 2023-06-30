using HealthCareApp.Models;

namespace HealthCareApp.Interfaces
{
    public interface IManageService<T,K,S,R>
    {
        public Task<T?> Login(T item);
        public Task<T?> DoctorRegisteration(K item);
        public Task<T?> PatientRegisteration(S item);
        public Task<R?> UpdateDoctor(R item);
        public Task<ICollection<Doctor?>> GetAllDoctors();
        public Task<ICollection<Patient?>> GetAllPatients();

    }
}
