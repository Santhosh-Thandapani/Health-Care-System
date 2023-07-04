using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.Context;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace HealthCareApp.Services
{
    public class UserRepo : IRepo<User, string>
    {
        private HealthCareContext _context;

        public UserRepo(HealthCareContext context )
        {
            _context= context;
        }

        public async Task<User?> Add(User item)
        {
            try
            {
                if (item != null)
                {
                    _context.Users.Add(item);
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

        public async Task<User?> Delete(string key)
        {
            try
            {
                if (key != null)
                {
                    var doc = await Get(key);
                    if (doc != null)
                    {
                        _context.Users.Remove(doc);
                        await _context.SaveChangesAsync();
                        return doc;
                    }
                }

            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception("unable delete at this moment");
        }

        public async Task<User?> Get(string key)
        {

            try
            {
                if (key != null)
                {
                    var user = await _context.Users.FirstOrDefaultAsync(s => s.UserId == key);
                    if (user != null)
                        return user;
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

        public async Task<ICollection<User?>> GetAll()
        {
            try
            {
                var users = await _context.Users.ToListAsync();
                if (users != null)
                    return users;
                return null;
                
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            throw new Exception();
        }

        public async Task<User?> Update(User item)
        {

            try
            {
                if (item != null && item.UserId != null)
                { 
                    var user = await Get(item.UserId);
                    if (user != null)
                    {
                        user.Status = item.Status;
                        await _context.SaveChangesAsync();
                        return user;
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
