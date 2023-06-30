using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;

namespace HealthCareApp.Models
{
    public class Doctor
    {
        [Key]
        public string? DoctorId { get; set; }
        [ForeignKey("DoctorId")]
        public User? User { get; set; }


        [Required(ErrorMessage = "Name is required")]
        public string? Name { get; set; }


        [Required(ErrorMessage = "Date of Birth is required")]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }


        [Range(0, 100, ErrorMessage = "Age must be a positive number")]
        public int Age { get; set; }



        [Required(ErrorMessage = "Address is required")]
        public string? Address { get; set; }



        [Required(ErrorMessage = "Contact number is required")]
        [DataType(DataType.PhoneNumber)]
        public string? ContactNo { get; set; }



        [Required(ErrorMessage = "Specialty is required")]
        public string? Specialty { get; set; }


        [Range(0,60, ErrorMessage = "Experience must be a positive number")]
        public int Experience { get; set; }


        [Required(ErrorMessage = "Qualifications are required")]
        public string? Qualifications { get; set; }
    }

}
