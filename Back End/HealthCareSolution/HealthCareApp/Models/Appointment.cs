namespace HealthCareApp.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public string? DoctorId { get; set; }
        public string? PatientId  { get; set; }
        public DateTime AppointmentDate { get; set;}
        public int slot { get; set; }
    }
}
