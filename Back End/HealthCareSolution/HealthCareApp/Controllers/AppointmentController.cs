using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HealthCareApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IManageService<UserDTO, DoctorDTO, PatientDTO, UpdateDTO> _service;

        public AppointmentController(IManageService<UserDTO, DoctorDTO, PatientDTO, UpdateDTO> service)
        {
            _service=service;
        }

        [HttpPost("Add Appointment")]
        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Appointment>> AddAppointment(Appointment appointment)
        {
            var result = await _service.AddAppointment(appointment);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Please Check Credentials");
        }

        [HttpDelete]
        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Appointment>> deleteAppointment(Appointment appointment)
        {
            var result = await _service.DeleteAppointment(appointment);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Please Check Credentials");
        }

        [HttpGet("Get Doctor Appointment")]
        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Appointment>>> GetDosAppointment(AppoDTO app)
        {
            var result = await _service.GetAppointmentsByDoctor(app);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Please Check Credentials");
        }

        [HttpGet("Get Patient Appointment")]
        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<ICollection<Appointment>>> GetPatientAppointment(AppoDTO app)
        {
            var result = await _service.GetAppointmentsByPatient(app);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Please Check Credentials");
        }

    }
}
