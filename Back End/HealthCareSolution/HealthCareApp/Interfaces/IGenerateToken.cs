using HealthCareApp.Models.DTO;

namespace HealthCareApp.Interfaces
{
    public interface IGenerateToken
    {
        public string GenerateToken(UserDTO user);
    }
}
