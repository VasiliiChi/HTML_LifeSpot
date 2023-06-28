using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace LifeSpot
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "Index.html");
                    var html = await File.ReadAllTextAsync(viewPath);
                    await context.Response.WriteAsync(html);
                });

                endpoints.MapGet("/Static/CSS/index.css", async context =>
                {
                    // по аналогии со страницей Index настроим на нашем сервере путь до страницы со стилями, чтобы браузер знал, откуда их загружать
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "Css", "Index.css");
                    var css = await File.ReadAllTextAsync(cssPath);
                    await context.Response.WriteAsync(css);
                });
                
                endpoints.MapGet("/Static/Js/Index.js", async context =>
                {
                    // по аналогии со страницей Index настроим на нашем сервере путь до файла Java Script
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "Js", "Index.js");
                    var js = await File.ReadAllTextAsync(jsPath);
                    await context.Response.WriteAsync(js);
                });
            });
        }
    }
}