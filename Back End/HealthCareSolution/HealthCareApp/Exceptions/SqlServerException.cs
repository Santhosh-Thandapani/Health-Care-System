using System.Runtime.Serialization;

namespace HealthCareApp.Exceptions
{
    public class SqlServerException:Exception
    {
        public SqlServerException()
        {

        }
        public SqlServerException(string? message) : base(message)
        {

        }
    }
}
