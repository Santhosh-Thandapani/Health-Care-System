using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HealthCareApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class HealthCareController : ControllerBase
    {
        private readonly IManageService<UserDTO, DoctorDTO, PatientDTO,UpdateDTO> _service;

        public HealthCareController( IManageService<UserDTO,DoctorDTO,PatientDTO,UpdateDTO> service)
        {
            _service=service;
        }

        [HttpPost("Login")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Login(UserDTO userDTO)
        {
            var result = await _service.Login(userDTO);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Please Check Credentials");
        }

        [HttpPost("DoctorRegister")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> DoctorRegister(DoctorDTO doctorDTO)
        {
            var result = await _service.DoctorRegisteration(doctorDTO);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPost("PatientRegister")]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> PatientRegister(PatientDTO patientDTO)
        {
            var result = await _service.PatientRegisteration(patientDTO);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPut("Update Doctor Status")]
        [ProducesResponseType(typeof(UpdateDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UpdateDTO>> UpdateDoctorStatus(UpdateDTO updateDTO)
        {
            var result = await _service.UpdateDoctor(updateDTO);
            if (result != null)
            {
                return Ok(result);
            }
            return BadRequest("Unable to update status at this moment");
        }

        [HttpGet("Get All Doctors")]
        [ProducesResponseType(typeof(ICollection<Doctor?>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Doctor?>>> GetDoctors()
        {
            var result = await _service.GetAllDoctors();
            if (result != null)
            {
                return Ok(result);
            }
            return NotFound("Unable to update status at this moment");
        }


        [HttpGet("Get All Patients")]
        [ProducesResponseType(typeof(ICollection<Doctor?>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Doctor?>>> GetPatients()
        {
            var result = await _service.GetAllPatients();
            if (result != null)
            {
                return Ok(result);
            }
            return NotFound("Unable to update status at this moment");
        }


    }
}
