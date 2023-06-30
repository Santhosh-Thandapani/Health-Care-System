using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HealthCareApp.Models
{
    public class Patient
    {
        [Key]
        public string? PatientId { get; set; }
        [ForeignKey("PatientId")]
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
    }

}
