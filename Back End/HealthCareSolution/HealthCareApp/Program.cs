using HealthCareApp.Interfaces;
using HealthCareApp.Models;
using HealthCareApp.Models.Context;
using HealthCareApp.Models.DTO;
using HealthCareApp.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(opts =>
{
    opts.AddPolicy("AngularCORS", options =>
    {
        options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});

builder.Services.AddDbContext<HealthCareContext>(opts =>
{
    opts.UseSqlServer(builder.Configuration.GetConnectionString("myConn"));
});

builder.Services.AddScoped<IRepo<Doctor, string>, DoctorRepo>();
builder.Services.AddScoped<IRepo<Patient,string>,PatientRepo>();
builder.Services.AddScoped<IRepo<User, string>,UserRepo>();
builder.Services.AddScoped<IManageService<UserDTO, DoctorDTO, PatientDTO, UpdateDTO>, ManagerService>();
builder.Services.AddScoped<IGenerateToken,GenerateTokenService>();
builder.Services.AddScoped<IGenerateUserId,GenerateUserIdService>();
builder.Services.AddScoped<IAdapterService,AdapterService>();
builder.Services.AddScoped<IAppoint, AppointmentRepo>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["TokenKey"])),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AngularCORS");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
