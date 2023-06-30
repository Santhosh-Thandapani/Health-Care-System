using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.DTO;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;

namespace HealthCareApp.Services
{
    public class AdapterService : IAdapterService
    {
        private readonly IGenerateUserId _userIdService;

        public AdapterService( IGenerateUserId userIdService) 
        {
            _userIdService = userIdService;
        }
        public async Task<User> DoctorDTOUserAdapter(DoctorDTO doctor, int count)
        {
            
            if (doctor != null) 
            {
                var hmac = new HMACSHA512();
                doctor.User.UserId = await _userIdService.GenerateUserId("Doctor",count);
                doctor.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(doctor.PasswordClear ?? "1234"));
                doctor.User.PasswordKey = hmac.Key;
                doctor.User.Role = "Doctor";
                doctor.User.Status = "Not Approved";
                return doctor.User;
            }
            return null;
        }

        public async Task<User> PatientDTOUserAdapter(PatientDTO patient, int count)
        {
            
            if (patient != null)
            {
                var hmac = new HMACSHA512();
                patient.User.UserId = await _userIdService.GenerateUserId("Patient", count);
                patient.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(patient.PasswordClear ?? "1234"));
                patient.User.PasswordKey = hmac.Key;
                patient.User.Role = "Patient";
                patient.User.Status = "Not Approved ";
                return patient.User;
            }
            return null;
        }
    }
}
