using System.Drawing;
using WebApiMooc.Configs;
using User

namespace WebApiMooc
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // 初始化配置和服务容器  
            // Initialize configuration and service container

            // 1. 初始化配置（读取 appsettings.json、环境变量等）  
            //    Load configuration (e.g. appsettings.json, environment variables)
            // 2. 创建日志系统  
            //    Set up the logging system
            // 3. 初始化依赖注入容器（IOC）  
            //    Initialize the dependency injection (IOC) container

            // IOC 容器就像一个“服务超市”，你只要在系统启动时把你要的“服务”提前放进去，
            // 之后在代码里就能“自动领取”这些服务，而不需要你自己 new。

            builder.Services.AddControllers();
            builder.Services.AddScoped<IUserService, UserService>();

            var mysettings = builder.Configuration.GetRequiredSection("MySettings").Get<MySettings>();

            //builder.Configuration--根据环境，去配置文件里读， GetRequiredSection,获取配置文件的指定区域，然后将节点映射到类型对象MySettings上。


            var environments = builder.Environment;
            //可以把environment相关信息拿出来，实际是在IWebHostEnvironment
            //可以拿到一些重要信息，比如当前环境名称，判断是否是开发环境，获取根目录，当前程序集名称



            //"MySettings"是配置文件中的区域名称，告诉程序我要从这个区域读取数据
            //<MySettings>是我写的类名，把JSON中的键值对绑定到属性上。




            // 注册控制器服务  
            // Register controllers to the IOC container

            // 向 IOC 容器中注册控制器相关服务  
            // Register controller services into the IOC container
            // 控制器的依赖项也会一并注册托管生命周期  
            // Their dependencies will also be managed automatically

            var app = builder.Build();

            // 构建完整应用实例  
            // Build the full application

            // 构建 Web 应用实例  
            // Build the WebApplication instance
            // 准备中间件、配置、服务等执行环境  
            // Prepare middleware, config, and services

            app.UseAuthorization();

            // 配置授权管道  
            // Configure the authorization pipeline

            // 启用授权中间件（无身份验证则无效）  
            // Enable authorization middleware (inactive without auth system)

            app.MapControllers();

            //和 builder.service一起使用不可删去


            // 映射控制器路由  
            // Enable controller routing system

            // 启用控制器路由映射  
            // Map controller routes automatically
            // 匹配 [ApiController] 控制器的 HTTP 路由  
            // Connect HTTP routes to controller actions

            app.Run();

            // 启动服务监听请求  
            // Start the server to listen for requests
        }
    }
}



//面试总结:

//这个类是 Web API 的程序入口。
//CreateBuilder() 初始化配置与服务容器，
//AddControllers() 把控制器注册到 IOC 中，
//Build() 构建出完整应用，
//UseAuthorization() 配置授权管道，
//MapControllers() 启用路由系统，
//最后 Run() 启动服务监听请求。

//    This class is the entry point of the Web API.
//CreateBuilder() initializes configuration and the service container,
//AddControllers() registers controllers to the IOC container,
//Build() creates the full application instance,
//UseAuthorization() adds the authorization middleware,
//MapControllers() sets up the routing system,
//Finally, Run() starts the server to listen for requests.





var app = builder.Build();

// 1. 错误处理中间件，应该放在最前面，确保能够捕获到所有异常
app.UseExceptionHandler("/Home/Error");

// 2. 使用静态文件中间件，确保能够处理如CSS、JS等静态文件请求
app.UseStaticFiles();

// 3. 路由中间件，决定如何将请求映射到控制器
app.UseRouting();

// 4. 身份验证中间件，确认用户身份已被验证
app.UseAuthentication();

// 5. 授权中间件，基于身份验证的结果对用户进行权限判断
app.UseAuthorization();

// 6. 注册最终的控制器路由终点
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
