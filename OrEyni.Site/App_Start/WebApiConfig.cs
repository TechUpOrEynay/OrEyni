using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OrEyni.Site
{
    public static class WebApiConfig
    {
      
        public static void Register(HttpConfiguration config)
        {
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new
             Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver();
            // Web API configuration and services
            var corsAttr = new EnableCorsAttribute("*", "*", "*");
           // var corsAttr = new EnableCorsAttribute(Properties.Settings.Default.Cors, "", "");
            config.EnableCors(corsAttr);
            
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
           // config.EnableCors(new EnableCorsAttribute(Properties.Settings.Default.Cors, "", ""))
            //config.MessageHandlers.Add(new PreflightRequestsHandler());
        }
    }
}
