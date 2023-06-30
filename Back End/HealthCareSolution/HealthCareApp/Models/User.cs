using System.ComponentModel.DataAnnotations;

namespace HealthCareApp.Models
{
    public class User
    {
        [Key]
        public string? UserId { get; set; }
        public string? Role { get; set; }
        public string? Status { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordKey { get; set; }
    }
}
