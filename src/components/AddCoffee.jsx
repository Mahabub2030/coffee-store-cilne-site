
const AddCoffee = () => {

  const handelAddCoffee= event =>{
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const suppliuer = form.suppliuer.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const Taste = form.Taste.value;
  
    const newCoffee={name,quantity,suppliuer,category,details,photo,Taste}
    console.log(newCoffee)
    
  }



  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extralight">Add coffee here</h2>

      <form>
        {/* form name & qunty row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Coffe Name</span>
            </label>
            <label className="input-group">
              <input type="text"  placeholder="Coffee Name" className="input input-bordered w-full" name="name" id="" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Available Quntity" className="input input-bordered w-full" name="quantity" id="" />
            </label>
          </div>
        </div>
        {/* form suppliuer stats row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Supplier Name" className="input input-bordered w-full" name="suppliuer" id="" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Taste" className="input input-bordered w-full" name="Taste" id="" />
            </label>
          </div>
        </div>
        {/* form Category & details row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full" name="Category" id="" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full" name="details" id="" />
            </label>
          </div>
        </div>
       
          
          <input type="submit" value="Add Coffee"className="btn btn-block mt-10" />

      </form>
    </div>
  );
};

export default AddCoffee;