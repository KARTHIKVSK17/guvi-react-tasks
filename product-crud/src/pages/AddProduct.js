function AddProduct() {
  return (
    <div className="container ">
      <div className="col-md-6 offset-md-3">
        <div className="row justify-content-center">
          <div className="card p-4 mt-5 bg-light">
            <h2>Add Product</h2>
            <form>
              <div className="form-group mb-3">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value=""
                />
              </div>
              <div className="form-group mb-3">
                <label for="name">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value=""
                />
              </div>
              <div className="form-group mb-3">
                <label for="name">Pic</label>
                <input
                  type="text"
                  className="form-control"
                  id="pic"
                  name="pic"
                  value=""
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
