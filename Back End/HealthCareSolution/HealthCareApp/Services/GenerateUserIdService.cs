using HealthCareApp.Interfaces;

namespace HealthCareApp.Services
{
    public class GenerateUserIdService : IGenerateUserId
    {
        public async Task<string> GenerateUserId(string role, int count)
        {
            if (role == "Doctor")
            {
                string userID = "DOC";
                if (count < 10 && count >= 0)
                    userID += "0" + (++count);
                else
                    userID += (++count);
                return  userID;
;            }
            else
            {
                string userID = "PID";
                if (count < 10 && count >= 0)
                    userID += "0" + (++count);
                else
                    userID += (++count);
                return userID;
            }
        }
    }
}
