using HealthCareApp.Models;
using HealthCareApp.Models.DTO;

namespace HealthCareApp.Interfaces
{
    public interface IManageService<T,K,S,R>
    {
        public Task<T?> Login(T item);
        public Task<T?> DoctorRegisteration(K item);
        public Task<T?> PatientRegisteration(S item);
        public Task<R?> UpdateDoctor(R item);
        public Task<R?> DeclineDoctor(R item);
        public Task<ICollection<Doctor?>> GetApprovedDoctors();
        public Task<ICollection<Doctor?>> GetNotApprovedDoctors();
        public Task<ICollection<Patient?>> GetAllPatients();
        public Task<Appointment> AddAppointment(Appointment appointment);
        public Task<Appointment> DeleteAppointment(Appointment appointment);
        public Task<ICollection<Appointment>> GetAppointmentsByDoctor(AppoDTO app);
        public Task<ICollection<Appointment>> GetAppointmentsByPatient(AppoDTO app);


    }
}
