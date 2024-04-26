import { useState } from "react"

const EditDetail = () => {
    const [edit, setEdit] = useState(false);

    return (
        <>
            {edit ? (
                
            <div className="card mb-3">
            <div className="card-body">
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> 
                        <input type="text" className="form-control" value="John Doe"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        <input type="text" className="form-control" value="john@example.com"/>
                        </div></div>
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary"> 
                            <input type="text" className="form-control" value="(239) 816-9029"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary"> 
                            <input type="text" className="form-control" value="(320) 380-4539"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary"> 
                        <input type="text" className="form-control" value="Bay Area, San Francisco, CA"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-9 text-secondary"> 
                        <input type="button" onClick={()=>{setEdit(false)}} className="btn btn-primary px-4" value="Save Changes"/>
                    </div>
                </div>
            </div>
        </div>
            ) : (
                // Content when 'edit' is false
                <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            Kenneth Valdez
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            fip@jukmuh.al
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            (239) 816-9029
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Mobile</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            (320) 380-4539
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            Bay Area, San Francisco, CA
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-12">
                            <a className="btn btn-info " target="__blank" onClick={()=>{setEdit(true)}}>Edit</a>
                        </div>
                    </div>
                </div>
            </div>
            )}    
        </>
    );
}

export default EditDetail;