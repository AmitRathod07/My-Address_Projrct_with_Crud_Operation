using Microsoft.EntityFrameworkCore;
using MyAddressBookApi.Data.Entities;

namespace MyAddressBookApi.Data
{
    public class MyAddressDbContext : DbContext
    {
        public MyAddressDbContext(DbContextOptions options) : base(options) { }

        public DbSet<AddressInfo> Addressbook { get; set; }

        internal Task GetAddress(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}           
