using HealthCareApp.Models.DTO;

namespace HealthCareApp.Interfaces
{
    public interface IGenerateToken
    {
        public Task<string> GenerateToken(UserDTO user);
    }
}
