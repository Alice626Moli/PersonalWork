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

            // ��ʼ�����úͷ�������  
            // Initialize configuration and service container

            // 1. ��ʼ�����ã���ȡ appsettings.json�����������ȣ�  
            //    Load configuration (e.g. appsettings.json, environment variables)
            // 2. ������־ϵͳ  
            //    Set up the logging system
            // 3. ��ʼ������ע��������IOC��  
            //    Initialize the dependency injection (IOC) container

            // IOC ��������һ���������С�����ֻҪ��ϵͳ����ʱ����Ҫ�ġ�������ǰ�Ž�ȥ��
            // ֮���ڴ�������ܡ��Զ���ȡ����Щ���񣬶�����Ҫ���Լ� new��

            builder.Services.AddControllers();
            builder.Services.AddScoped<IUserService, UserService>();

            var mysettings = builder.Configuration.GetRequiredSection("MySettings").Get<MySettings>();

            //builder.Configuration--���ݻ�����ȥ�����ļ������ GetRequiredSection,��ȡ�����ļ���ָ������Ȼ�󽫽ڵ�ӳ�䵽���Ͷ���MySettings�ϡ�


            var environments = builder.Environment;
            //���԰�environment�����Ϣ�ó�����ʵ������IWebHostEnvironment
            //�����õ�һЩ��Ҫ��Ϣ�����統ǰ�������ƣ��ж��Ƿ��ǿ�����������ȡ��Ŀ¼����ǰ��������



            //"MySettings"�������ļ��е��������ƣ����߳�����Ҫ����������ȡ����
            //<MySettings>����д����������JSON�еļ�ֵ�԰󶨵������ϡ�




            // ע�����������  
            // Register controllers to the IOC container

            // �� IOC ������ע���������ط���  
            // Register controller services into the IOC container
            // ��������������Ҳ��һ��ע���й���������  
            // Their dependencies will also be managed automatically

            var app = builder.Build();

            // ��������Ӧ��ʵ��  
            // Build the full application

            // ���� Web Ӧ��ʵ��  
            // Build the WebApplication instance
            // ׼���м�������á������ִ�л���  
            // Prepare middleware, config, and services

            app.UseAuthorization();

            // ������Ȩ�ܵ�  
            // Configure the authorization pipeline

            // ������Ȩ�м�����������֤����Ч��  
            // Enable authorization middleware (inactive without auth system)

            app.MapControllers();

            //�� builder.serviceһ��ʹ�ò���ɾȥ


            // ӳ�������·��  
            // Enable controller routing system

            // ���ÿ�����·��ӳ��  
            // Map controller routes automatically
            // ƥ�� [ApiController] �������� HTTP ·��  
            // Connect HTTP routes to controller actions

            app.Run();

            // ���������������  
            // Start the server to listen for requests
        }
    }
}



//�����ܽ�:

//������� Web API �ĳ�����ڡ�
//CreateBuilder() ��ʼ�����������������
//AddControllers() �ѿ�����ע�ᵽ IOC �У�
//Build() ����������Ӧ�ã�
//UseAuthorization() ������Ȩ�ܵ���
//MapControllers() ����·��ϵͳ��
//��� Run() ���������������

//    This class is the entry point of the Web API.
//CreateBuilder() initializes configuration and the service container,
//AddControllers() registers controllers to the IOC container,
//Build() creates the full application instance,
//UseAuthorization() adds the authorization middleware,
//MapControllers() sets up the routing system,
//Finally, Run() starts the server to listen for requests.





var app = builder.Build();

// 1. �������м����Ӧ�÷�����ǰ�棬ȷ���ܹ����������쳣
app.UseExceptionHandler("/Home/Error");

// 2. ʹ�þ�̬�ļ��м����ȷ���ܹ�������CSS��JS�Ⱦ�̬�ļ�����
app.UseStaticFiles();

// 3. ·���м����������ν�����ӳ�䵽������
app.UseRouting();

// 4. �����֤�м����ȷ���û�����ѱ���֤
app.UseAuthentication();

// 5. ��Ȩ�м�������������֤�Ľ�����û�����Ȩ���ж�
app.UseAuthorization();

// 6. ע�����յĿ�����·���յ�
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
