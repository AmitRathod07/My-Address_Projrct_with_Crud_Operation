using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MyAddressBookApi.Data.Entities
{
    public class AddressInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public String? Family { get; set; }
        public String? FirstName { get; set; }
        public String? LastName { get; set; }
        public String? Email { get; set; }
        public long? Phone { get; set; }
        public String? Address { get; set; }
        public long? Postalcode { get; set; }
        public String? City { get; set; }
        public String? State { get; set; }
        public String? Country { get; set; }
    }
}
