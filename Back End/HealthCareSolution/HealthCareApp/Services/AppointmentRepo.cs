using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.Context;
using HealthCareApp.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace HealthCareApp.Services
{
    public class AppointmentRepo : IAppoint
    {
        private readonly HealthCareContext _context;

        public AppointmentRepo(HealthCareContext context)
        {
            _context=context;
        }
        public async Task<Appointment?> Add(Appointment appointment)
        {
            if(appointment != null)
            {
                _context.Appointments.Add(appointment);
                await _context.SaveChangesAsync();
                return appointment;
            }
            return null;
        }

        public async Task<Appointment?> Delete(Appointment appointment)
        {
            if( appointment != null)
            {
                _context.Appointments.Remove(appointment);
                await _context.SaveChangesAsync();
                return appointment;
            }
            return null;    
        }

        public async Task<ICollection<Appointment>> GetAppoByDoc(AppoDTO app)
        {
            var appos =await _context.Appointments.Where(s => s.DoctorId == app.ID).ToListAsync();
            if (appos != null)
                return appos;
            return new List<Appointment>();
        }

        public async Task<ICollection<Appointment>> GetAppoBypatient(AppoDTO app)
        {
            var appos = await _context.Appointments.Where(s => s.PatientId == app.ID).ToListAsync();
            if (appos != null)
                return appos;
            return new List<Appointment>();
        }
    }
}
