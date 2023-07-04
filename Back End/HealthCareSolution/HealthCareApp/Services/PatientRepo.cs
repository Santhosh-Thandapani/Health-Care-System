using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.Context;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace HealthCareApp.Services
{
    public class PatientRepo : IRepo<Patient, string>
    {
        private readonly HealthCareContext _context;

        public PatientRepo(HealthCareContext context)
        {
            _context=context;
        }
        public async Task<Patient?> Add(Patient item)
        {
            try
            {
                if (item != null)
                {
                    _context.Patients.Add(item);
                    await _context.SaveChangesAsync();
                    return item;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }

        public async Task<Patient?> Delete(string key)
        {
            try
            {
                if (key != null)
                {
                    var doc = await Get(key);
                    if (doc != null)
                    {
                        _context.Patients.Remove(doc);
                        await _context.SaveChangesAsync();
                        return doc;
                    }
                    return null;
                }

            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }

        public async Task<Patient?> Get(string key)
        {

            try
            {
                if (key != null)
                {
                    var doc = await _context.Patients.FirstOrDefaultAsync(s => s.PatientId == key);
                    if (doc != null)
                        return doc;
                    return null;
                }
                return null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }

        public async Task<ICollection<Patient?>> GetAll()
        {
            try
            {
                var patients = await _context.Patients.ToListAsync();
                if (patients != null)
                    return patients;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }

        public async Task<Patient?> Update(Patient item)
        {

            try
            {
                if (item != null && item.PatientId != null)
                {
                    var patient = await Get(item.PatientId);
                    if (patient != null)
                    {
                        patient.ContactNo = item.ContactNo;
                        patient.Address = item.Address;
                        
                        await _context.SaveChangesAsync();
                        return patient;
                    }
                    return null;
                }
                return null;

            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }
    }
}
