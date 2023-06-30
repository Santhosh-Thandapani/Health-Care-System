using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.DTO;
using Microsoft.VisualBasic;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;

namespace HealthCareApp.Services
{
    public class ManagerService : IManageService<UserDTO, DoctorDTO, PatientDTO,UpdateDTO>
    {
        private readonly IRepo<User, string> _userRepo;
        private readonly IRepo<Patient, string> _patientRepo;
        private readonly IRepo<Doctor, string> _doctorRepo;
        private readonly IGenerateToken _tokenService;
        private readonly IAdapterService _adapterService;

        public ManagerService(
            IRepo<User,string> userRepo,
            IRepo<Patient,string> patientRepo,
            IRepo<Doctor,string> doctorRepo, 
            IAdapterService adapterService,
            IGenerateToken tokenService)
        {
            _userRepo=userRepo;
            _patientRepo=patientRepo;
            _doctorRepo=doctorRepo;
            _tokenService = tokenService;
             _adapterService = adapterService;
        }

        public async Task<UserDTO?> Login(UserDTO userDTO)
        {
            UserDTO user = null;

            if(userDTO.UserId != null ) 
            {
                var doctorData = await _userRepo.Get(userDTO.UserId);
                if (doctorData != null)
                {
                    var hmac = new HMACSHA512(doctorData.PasswordKey);
                    var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(userDTO.Password));
                    for (int i = 0; i < userPass.Length; i++)
                    {
                        if (userPass[i] != doctorData.PasswordHash[i])
                            return null;
                    }
                    user = new UserDTO();
                    user.UserId = doctorData.UserId;
                    user.Status = doctorData.Status;
                    user.Role = doctorData.Role;
                    user.Token = _tokenService.GenerateToken(user);
                    return user;
                }
            }
            return null;
        }

        public async Task<UserDTO?> DoctorRegisteration(DoctorDTO doctor)
        {
            UserDTO userDTO = null;
            int count = 0;
            var allDoctors = await _doctorRepo.GetAll();
            if (allDoctors!=null)
                count=allDoctors.Count();
            else count=0;
            User user = await _adapterService.DoctorDTOUserAdapter(doctor, count);
            doctor.Age = DateTime.Today.Year - new DateTime(doctor.DateOfBirth.Year, doctor.DateOfBirth.Month, doctor.DateOfBirth.Day).Year;
            var userResult = await _userRepo.Add(user);
            var DoctorResult = await _doctorRepo.Add(doctor);
          
            if (userResult != null && DoctorResult != null)
            {
                userDTO = new UserDTO();
                userDTO.UserId = userResult.UserId;
                userDTO.Role = userResult.Role;
                userDTO.Status = userResult.Status;
                userDTO.Token = _tokenService.GenerateToken(userDTO);
            }
            return userDTO;
        }

        public async Task<UserDTO?> PatientRegisteration(PatientDTO patient)
        {
            UserDTO userDTO = null;
            int count = 0;
            var allPatients = await _patientRepo.GetAll();
            if (allPatients != null)
                count = allPatients.Count();
            else count = 0;
            User user = await _adapterService.PatientDTOUserAdapter(patient, count);
            patient.Age = DateTime.Today.Year - new DateTime(patient.DateOfBirth.Year, patient.DateOfBirth.Month, patient.DateOfBirth.Day).Year;
            var userResult = await _userRepo.Add(user);
            var PatientResult = await _patientRepo.Add(patient);
            if (userResult != null && PatientResult != null)
            {
                userDTO = new UserDTO();
                userDTO.UserId = userResult.UserId;
                userDTO.Role = userResult.Role;
                userDTO.Status = userResult.Status;
                userDTO.Token = _tokenService.GenerateToken(userDTO);
            }
            return userDTO;
        }

        public async Task<UpdateDTO?> UpdateDoctor(UpdateDTO item)
        {
            User user = await _userRepo.Get(item.DoctorId);
            if (user != null)
            {
                if (user.Status == "Not Approved")
                    user.Status = "Approved";
                else
                    user.Status = "Not Approved";
                var result = await _userRepo.Update(user);
                if (result != null)
                    return item;
                return null;
            }
            return null; 
        }

        public async Task<ICollection<Doctor?>> GetAllDoctors()
        {
            var doctors= await _doctorRepo.GetAll();
            if(doctors != null)
                return doctors;
            return null;
        }

        public async Task<ICollection<Patient?>> GetAllPatients()
        {
            var patients = await _patientRepo.GetAll();
            if(patients != null)
                return patients;
            return null;
        }
    }
}
