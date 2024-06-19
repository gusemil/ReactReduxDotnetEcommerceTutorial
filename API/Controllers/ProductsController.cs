using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContent context;
        public ProductsController(StoreContent context)
        {
            this.context = context;

        }

        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var products = context.Products.ToList();

            return Ok(products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            return context.Products.Find(id);
        }
    }
}