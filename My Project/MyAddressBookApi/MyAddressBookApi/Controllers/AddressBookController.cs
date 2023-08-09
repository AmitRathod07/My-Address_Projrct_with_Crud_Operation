using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyAddressBookApi.Data;
using MyAddressBookApi.Data.Entities;
using System.Net;

namespace MyAddressBookApi.Controllers
{
    /// <summary>
    /// The controller definied for Address Book
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class AddressBookController : Controller
    {
        private readonly MyAddressDbContext _myAddressDbContext;
        public AddressBookController(MyAddressDbContext myAddressDbContext)
        {
            _myAddressDbContext = myAddressDbContext;
        }

        /// <summary>
        /// Get address list 
        /// </summary>
        /// <returns>AddressBook</returns>
        [HttpGet("[controller]/" + nameof(GetAddressList))]     
        [Produces("application/json")]
        [ProducesResponseType(typeof(List<Data.Entities.AddressInfo>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetAddressList()
        {
            var addressList = await _myAddressDbContext.Addressbook.ToListAsync();

            
            if (!addressList.Any())
            {
                return NotFound("No addresses found!");     
            }

            return Ok(addressList);
        }


        
        /// <param name="id">Address Id</param>
        /// <summary>
        /// Get specific address from Id
        /// </summary>
        /// <returns></returns>
        [HttpGet("[controller]/" + nameof(GetAddress))]
        [Produces("application/json")]
        [ProducesResponseType(typeof(Data.Entities.AddressInfo), (int)HttpStatusCode.OK)]
        //[Route("{Id:Guid}")]
        public async Task<ActionResult> GetAddress(Guid Id)
        {
            //var address = await (from a in _myAddressDbContext.Addressbook
            //                   where a.Id == id
            //                 select a).FirstOrDefaultAsync();

            var address = await _myAddressDbContext.Addressbook.FirstOrDefaultAsync(x => x.Id == Id);


            if (address == null)
            {
                return NotFound("No address found!");
            }

            return Ok(address);


            
                //var address = await _myAddressDbContext.GetAddress(Id);
                //if (address == null) return NotFound();
                //return Ok(address);
            
                //return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            

        }

        /// <summary>
        /// Add AddressInfo to DB
        /// </summary>
        /// <returns></returns>
        [HttpPost("[controller]/" + nameof(AddAddress))]
        [Produces("application/json")]
        [ProducesResponseType(typeof(Data.Entities.AddressInfo), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> AddAddress([FromBody] MyAddressBookApi.Data.Entities.AddressInfo addAddressRequest)
        {
            //var add = await _myAddressDbContext.AddressBook.ToListAsync();
            //return Ok(add);
            if(addAddressRequest == null)
            {
                return NotFound("Please Enter Valid data");
            }
            //addAddressRequest.Id = Guid.NewGuid();
            //_myAddressDbContext..Add(new AddressInfo
            //{
            //    Family = addAddressRequest.Family,
            //    FirstName = addAddressRequest.FirstName,
            //    LastName = addAddressRequest.LastName,
            //    Email = addAddressRequest.Email,
            //    Phone = addAddressRequest.Phone,
            //    Address = addAddressRequest.Address,
            //    Postalcode = addAddressRequest.Postalcode,
            //    City = addAddressRequest.City,
            //    State = addAddressRequest.State,
            //    Country = addAddressRequest.Country
            //});


            //addAddressRequest.Id = ((int)addAddressRequest.Id);
            addAddressRequest.Id = Guid.NewGuid();
            await _myAddressDbContext.Addressbook.AddAsync(addAddressRequest);
            await _myAddressDbContext.SaveChangesAsync();
            return Ok(addAddressRequest);
        }

        
        /// <summary>
        /// Edit AddressInfo To DB
        /// </summary>
        [HttpPut("[controller]/" + nameof(UpdateAddress))]
        [Produces("application/json")]
        [ProducesResponseType(typeof(Data.Entities.AddressInfo), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> UpdateAddress(AddressInfo updateAddressrquest)
        {
            //var address = await _myAddressDbContext.Addressbook.FindAsync(id);

            if (updateAddressrquest == null)
            {
                return NotFound();
            }

            //address.Family = updateAddressrquest.Family;
            //address.FirstName = updateAddressrquest.FirstName;
            //address.LastName = updateAddressrquest.LastName;
            //address.Email = updateAddressrquest.Email;
            //address.Phone = updateAddressrquest.Phone;
            //address.Address = updateAddressrquest.Address;
            //address.Postalcode = updateAddressrquest.Postalcode;
            //address.City = updateAddressrquest.City;
            //address.State = updateAddressrquest.State;
            //address.Country = updateAddressrquest.Country;

            _myAddressDbContext.Addressbook.Update(updateAddressrquest);
            await _myAddressDbContext.SaveChangesAsync();
            return Ok(updateAddressrquest);
        }

        
        /// <summary>
        /// Delete That Record in DB
        /// </summary>
        [HttpDelete("[controller]/" + nameof(DeleteAddress))]
        [Produces("application/json")]
        [ProducesResponseType(typeof(Data.Entities.AddressInfo), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> DeleteAddress(Guid id)
        {
            var address = await _myAddressDbContext.Addressbook.FindAsync(id);
            if (address == null)
            {
                return NotFound();
            }
            
            _myAddressDbContext.Addressbook.Remove(address);
            await _myAddressDbContext.SaveChangesAsync();
            return Ok(address);
        }
        
    }
}
