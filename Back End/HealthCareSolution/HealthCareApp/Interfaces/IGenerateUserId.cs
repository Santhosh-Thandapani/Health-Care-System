﻿namespace HealthCareApp.Interfaces
{
    public interface IGenerateUserId
    {
        public Task<string> GenerateUserId(string role , int count);
    }
}
