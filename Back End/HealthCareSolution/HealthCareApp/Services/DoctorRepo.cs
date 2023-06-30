using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.Context;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Diagnostics;

namespace HealthCareApp.Services
{
    public class DoctorRepo : IRepo<Doctor, string>
    {
        private readonly HealthCareContext _context;

        public DoctorRepo(HealthCareContext context)
        {
            _context=context;
        }
        public async Task<Doctor?> Add(Doctor item)
        {
            try
            {
                if (item != null)
                {
                    _context.Doctors.Add(item);
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

        public async Task<Doctor?> Delete(string key)
        {
            try
            {
                if(key != null)
                {
                    var doc = await Get(key);
                   if(doc!= null)
                    {
                        _context.Doctors.Remove(doc);
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

        public async Task<Doctor?> Get(string key)
        {
            try
            {
                if (key != null)
                {
                    var doc =await _context.Doctors.FirstOrDefaultAsync(s => s.DoctorId == key);
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

        public async Task<ICollection<Doctor?>> GetAll()
        {
            try
            {
                var doctors = await _context.Doctors.ToListAsync();
                if (doctors != null)
                    return doctors;
                return null;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }

        public async Task<Doctor?> Update(Doctor item)
        {
            try
            {
                if(item != null && item.DoctorId != null)
                {
                    var doc =await Get(item.DoctorId);
                    if (doc != null)
                    {
                        doc.ContactNo = item.ContactNo;
                        doc.Address = item.Address;
                        doc.Experience = item.Experience;
                        await _context.SaveChangesAsync();
                        return doc;
                    }
                    return null;
                }
                return null;

            }
            catch(Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }
    }
}
